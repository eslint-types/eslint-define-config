import { logger } from '@poppinss/cliui';
import { pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import * as fs from 'node:fs';
import { join } from 'node:path';
import dedent from 'ts-dedent';
import type { Plugin } from './contracts';
import { format } from './src/format';
import { JsDocBuilder } from './src/js-doc-builder';
import { pluginsMap } from './src/plugins-map';
import { RuleFile } from './src/rule-file';

/**
 * Generate the index.d.ts file for the plugin's rules that will re-export all
 * rules.
 */
function generateRuleIndexFile(
  pluginDirectory: string,
  { rules, name }: Plugin,
  failedRules: string[],
): void {
  const generatedRules = Object.keys(rules).filter(
    (ruleName) => !failedRules.includes(ruleName),
  );

  /**
   * Build all the import statements for the rules
   */
  const rulesImports = generatedRules
    .map((name) => `import type { ${pascalCase(name)}Rule } from './${name}';`)
    .join('\n');

  /**
   * Build the exported type that is an intersection of all the rules
   */
  const rulesFinalIntersection = generatedRules
    .map((name) => `${pascalCase(name)}Rule`)
    .join(' & ');

  const pluginRulesType = dedent(`
    ${JsDocBuilder.build().add(`All ${name} rules.`).output()}
    export type ${name}Rules = ${rulesFinalIntersection};
  `);

  /**
   * Write the final index.d.ts file
   */
  const fileContent = dedent(`
    ${rulesImports}

    ${pluginRulesType}
  `);

  const indexPath = join(pluginDirectory, 'index.d.ts');
  fs.writeFileSync(indexPath, format(fileContent));
}

/**
 * Print a report after having generated rules files for a plugin
 */
function printGenerationReport(
  rules: [string, Rule.RuleModule][],
  failedRules: string[],
): void {
  const msg = `  ✅ Generated ${rules.length - failedRules.length} rules`;
  logger.logUpdate(logger.colors.green(msg));
  logger.logUpdatePersist();

  if (failedRules.length) {
    logger.log(logger.colors.red(`  ❌ Failed ${failedRules.length} rules`));
  }
  logger.log('');
}

/**
 * Generate a .d.ts file for each rule in the given plugin
 */
async function generateRulesFiles(
  plugin: Plugin,
  pluginDirectory: string,
): Promise<{ failedRules: string[] }> {
  const failedRules: string[] = [];

  const rules = Object.entries(plugin.rules);
  for (const [ruleName, rule] of rules) {
    logger.logUpdate(logger.colors.yellow(`  Generating > ${ruleName}`));

    const ruleFile = new RuleFile(plugin, pluginDirectory, ruleName, rule);
    try {
      await ruleFile.generate();
      ruleFile.writeGeneratedContent();
    } catch (err) {
      failedRules.push(ruleName);
    }
  }

  printGenerationReport(rules, failedRules);

  return { failedRules };
}
/**
 * If it doesn't exist, create the directory that will contain the plugin's
 * rule files.
 */
function createPluginDirectory(
  pluginName: string,
  targetDirectory?: string,
): string {
  const rulesDirectory = join(__dirname, targetDirectory || '../../src/rules');
  const pluginDirectory = join(rulesDirectory, pluginName);

  if (fs.existsSync(pluginDirectory)) {
    fs.rmSync(pluginDirectory, { recursive: true, force: true });
  }

  fs.mkdirSync(pluginDirectory, { mode: 0o755, recursive: true });
  return pluginDirectory;
}

export async function run(options?: {
  plugins?: string[];
  targetDirectory?: string;
}): Promise<void> {
  const { plugins, targetDirectory } = options || {};
  const wantedPlugins = plugins ?? Object.keys(pluginsMap);

  for (const pluginName of wantedPlugins) {
    const plugin = pluginsMap[pluginName]!;

    if (!plugin) {
      throw new Error(`Plugin ${pluginName} doesn't exist`);
    }

    logger.info(`Generating ${plugin.name} rules`);

    const pluginDir = createPluginDirectory(pluginName, targetDirectory);
    const { failedRules } = await generateRulesFiles(plugin, pluginDir);

    generateRuleIndexFile(pluginDir, plugin, failedRules);
  }
}
