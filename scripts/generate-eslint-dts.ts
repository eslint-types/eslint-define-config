import { pascalCase } from 'change-case';
import type { Rule } from 'eslint';
import eslint from 'eslint';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const rules = Object.fromEntries(new eslint.Linter().getRules().entries());

const ruleOptionImports: string[] = [];
const ruleDeclarations: string[] = [];

for (const [ruleName, ruleDefinition] of Object.entries(rules ?? {})) {
  const meta = ruleDefinition.meta ?? {};

  let schemas = (meta.schema as JSONSchema4[]) ?? [];
  if (!Array.isArray(schemas)) {
    schemas = [schemas];
  }

  const options = await Promise.all(
    schemas.map(async (schema, index) => {
      schema = JSON.parse(
        JSON.stringify(schema).replaceAll('#/items/0/$defs/', '#/$defs/'),
      );

      return await compile(schema, `Schema${index}`, {
        bannerComment: '',
      });
    }),
  );

  await writeFile(
    join(__dirname, '..', 'src', 'rules', 'eslint', `${ruleName}.d.ts`),
    `${options.join('\n')}
export type ${pascalCase(ruleName)}RuleOptions = [${options
      .map((_, index) => `Schema${index}?`)
      .join(', ')}]
`,
    {
      encoding: 'utf8',
      flag: 'w',
    },
  );

  ruleOptionImports.push(
    `import type { ${pascalCase(ruleName)}RuleOptions } from "./${ruleName}"`,
  );

  const documentation: Rule.RuleMetaData['docs'] = meta.docs ?? {};

  ruleDeclarations.push(`/**
     * ${documentation.description?.replace(/\*\/`/g, '*\\/`')}
     *
     * @see [${ruleName}](${documentation.url})
     */
    "${ruleName}": RuleConfig<${pascalCase(ruleName)}RuleOptions>;`);
}

await writeFile(
  join(__dirname, '..', 'src', 'rules', 'eslint', 'index.d.ts'),
  `${ruleOptionImports.join('\n')}
import type { RuleConfig } from '../rule-config';

export interface EslintRules {
    ${ruleDeclarations.join('\n')}
}
`,
  {
    encoding: 'utf8',
    flag: 'w',
  },
);
