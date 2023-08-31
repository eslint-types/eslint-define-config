import { logger } from '@poppinss/cliui';
import { pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { dedent } from 'ts-dedent';
import type { Plugin, PluginRules } from './contracts/index.js';
import { format } from './src/format.js';
import { JsDocBuilder } from './src/js-doc-builder.js';
import { PLUGIN_REGISTRY, loadPlugin } from './src/plugins-map.js';
import { RuleFile } from './src/rule-file.js';

const __dirname: string = fileURLToPath(new URL('.', import.meta.url));

interface FailedRule {
  ruleName: string;
  err: unknown;
}

/**
 * Generate the `index.d.ts` file for the plugin's rules that will re-export all rules.
 */
async function generateRuleIndexFile(
  pluginDirectory: string,
  { rules, name }: Plugin,
  failedRules: FailedRule[],
): Promise<void> {
  if (!rules) {
    throw new Error(
      `Plugin ${name} doesn't have any rules. Did you forget to load them?`,
    );
  }

  const generatedRules: string[] = Object.keys(rules).filter(
    (ruleName) =>
      !failedRules.some((failedRule) => failedRule.ruleName === ruleName),
  );

  /**
   * Build all the import statements for the rules.
   */
  const rulesImports: string = generatedRules
    .map(
      (name) =>
        `import type { ${pascalCase(name)}Rule } from './${name}.d.ts';`,
    )
    .join('\n');

  /**
   * Build the exported type that is an intersection of all the rules.
   */
  const rulesFinalIntersection: string = generatedRules
    .map((name) => `${pascalCase(name)}Rule`)
    .join(' & ');

  const pluginRulesType: string = dedent(`
    ${JsDocBuilder.build().add(`All ${name} rules.`).output()}
    export type ${name}Rules = ${rulesFinalIntersection};
  `);

  /**
   * Write the final `index.d.ts` file.
   */
  const fileContent: string = dedent(`
    ${rulesImports}

    ${pluginRulesType}
  `);

  const indexPath: string = join(pluginDirectory, 'index.d.ts');
  writeFileSync(indexPath, await format(fileContent));
}

/**
 * Print a report after having generated rules files for a plugin.
 */
function printGenerationReport(
  rules: Array<[string, Rule.RuleModule]>,
  failedRules: FailedRule[],
): void {
  const msg: string = `  ✅ Generated ${
    rules.length - failedRules.length
  } rules`;
  logger.logUpdate(logger.colors.green(msg));
  logger.logUpdatePersist();

  if (failedRules.length) {
    logger.log(logger.colors.red(`  ❌ Failed ${failedRules.length} rules`));
    failedRules.forEach(({ ruleName, err }) => {
      logger.log(logger.colors.red(`    - ${ruleName}: ${String(err)}`));
    });
  }

  logger.log('');
}

/**
 * Generate a `.d.ts` file for each rule in the given plugin.
 */
async function generateRulesFiles(
  plugin: Plugin,
  pluginDirectory: string,
): Promise<{ failedRules: FailedRule[] }> {
  const failedRules: FailedRule[] = [];

  const pluginRules: PluginRules | undefined = plugin.rules;
  if (!pluginRules) {
    throw new Error(
      `Plugin ${plugin.name} doesn't have any rules. Did you forget to load them?`,
    );
  }

  const rules: Array<[string, Rule.RuleModule]> = Object.entries(pluginRules);
  for (const [ruleName, rule] of rules) {
    logger.logUpdate(logger.colors.yellow(`  Generating > ${ruleName}`));

    const ruleFile: RuleFile = new RuleFile(
      plugin,
      pluginDirectory,
      ruleName,
      rule,
    );
    try {
      await ruleFile.generate();
      ruleFile.writeGeneratedContent();
      ruleFile.applyPatch();
    } catch (err) {
      failedRules.push({ ruleName, err });
    }
  }

  printGenerationReport(rules, failedRules);

  return { failedRules };
}

/**
 * If it doesn't exist, create the directory that will contain the plugin's rule files.
 */
function createPluginDirectory(
  pluginName: string,
  targetDirectory?: string,
): string {
  const rulesDirectory: string = join(
    __dirname,
    targetDirectory ?? '../../src/rules',
  );
  const pluginDirectory: string = join(rulesDirectory, pluginName);

  if (existsSync(pluginDirectory)) {
    rmSync(pluginDirectory, { recursive: true, force: true });
  }

  mkdirSync(pluginDirectory, { mode: 0o755, recursive: true });

  return pluginDirectory;
}

export interface RunOptions {
  plugins?: string[];
  targetDirectory?: string;
}

export async function run(options: RunOptions = {}): Promise<void> {
  const { plugins, targetDirectory } = options;

  const wantedPlugins: string[] = plugins ?? Object.keys(PLUGIN_REGISTRY);

  for (const pluginName of wantedPlugins) {
    const plugin: Plugin | undefined = PLUGIN_REGISTRY[pluginName];
    if (!plugin) {
      throw new Error(`Plugin ${pluginName} doesn't exist.`);
    }

    logger.info(`Generating ${plugin.name} rules.`);
    logger.logUpdate(
      logger.colors.yellow(`  Loading plugin > ${plugin.module}`),
    );
    const loadedPlugin: Plugin = await loadPlugin(plugin);

    const pluginDir: string = createPluginDirectory(
      pluginName,
      targetDirectory,
    );
    const { failedRules } = await generateRulesFiles(loadedPlugin, pluginDir);

    await generateRuleIndexFile(pluginDir, loadedPlugin, failedRules);
  }
}
