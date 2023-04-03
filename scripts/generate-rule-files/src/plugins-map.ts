import type { AsyncPlugin, Plugin } from '../contracts';

/**
 * Map of plugins for which the script will generate rule files.
 */
export const PLUGIN_REGISTRY: Readonly<Record<string, AsyncPlugin>> = {
  deprecation: {
    name: 'Deprecation',
    module: 'eslint-plugin-deprecation',
  },
  eslint: {
    name: 'Eslint',
    module: 'eslint',
  },
  'typescript-eslint': {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    module: '@typescript-eslint/eslint-plugin',
  },
  import: {
    name: 'Import',
    module: 'eslint-plugin-import',
  },
  'eslint-comments': {
    name: 'EslintComments',
    module: 'eslint-plugin-eslint-comments',
  },
  'graphql-eslint': {
    name: 'GraphQL',
    prefix: '@graphql-eslint',
    module: '@graphql-eslint/eslint-plugin',
  },
  jsdoc: {
    name: 'JSDoc',
    prefix: 'jsdoc',
    module: 'eslint-plugin-jsdoc',
  },
  jsonc: {
    name: 'Jsonc',
    module: 'eslint-plugin-jsonc',
  },
  mdx: {
    name: 'Mdx',
    module: 'eslint-plugin-mdx',
  },
  n: {
    name: 'N',
    module: 'eslint-plugin-n',
  },
  node: {
    name: 'Node',
    module: 'eslint-plugin-node',
  },
  promise: {
    name: 'Promise',
    module: 'eslint-plugin-promise',
  },
  sonarjs: {
    name: 'SonarJS',
    prefix: 'sonarjs',
    module: 'eslint-plugin-sonarjs',
  },
  spellcheck: {
    name: 'Spellcheck',
    module: 'eslint-plugin-spellcheck',
  },
  unicorn: {
    name: 'Unicorn',
    module: 'eslint-plugin-unicorn',
  },
  vue: {
    name: 'Vue',
    module: 'eslint-plugin-vue',
  },
  'vue-i18n': {
    name: 'VueI18n',
    prefix: '@intlify/vue-i18n',
    module: '@intlify/eslint-plugin-vue-i18n',
  },
  'vue-pug': {
    name: 'VuePug',
    module: 'eslint-plugin-vue-pug',
  },
} as const;

export async function loadPlugin(asyncPlugin: AsyncPlugin): Promise<Plugin> {
  const mod: any = await import(asyncPlugin.module);
  const rules: Plugin['rules'] =
    asyncPlugin.module == 'eslint'
      ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument
        Object.fromEntries(new mod.Linter().getRules().entries())
      : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        mod.rules ?? mod.default.rules;
  Object.entries(rules);
  return { ...asyncPlugin, rules };
}
