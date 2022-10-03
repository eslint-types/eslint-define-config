import * as eslint from 'eslint';
// @ts-expect-error
import * as eslintPluginImport from 'eslint-plugin-import';
// @ts-expect-error
import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
import * as eslintPluginMdx from 'eslint-plugin-mdx';
// @ts-expect-error
import eslintPluginNode from 'eslint-plugin-node';
// @ts-expect-error
import eslintPluginSpellcheck from 'eslint-plugin-spellcheck';
// @ts-expect-error
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// @ts-expect-error
import eslintPluginVue from 'eslint-plugin-vue';
// @ts-expect-error
import eslintPluginVuePug from 'eslint-plugin-vue-pug';
// @ts-expect-error
import eslintPluginVueI18n from '@intlify/eslint-plugin-vue-i18n';
// @ts-expect-error
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import type { Plugin } from '../contracts';

/**
 * Map of plugins for which the script will generate rule files.
 */
export const pluginsMap: Record<string, Plugin> = {
  eslint: {
    name: 'Eslint',
    rules: Object.fromEntries(new eslint.Linter().getRules().entries()),
  },
  'typescript-eslint': {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    rules: (eslintPluginTypeScript as Plugin).rules,
  },
  import: {
    name: 'Import',
    rules: (eslintPluginImport as Plugin).rules,
  },
  jsdoc: {
    name: 'JSDoc',
    prefix: 'jsdoc',
    rules: (eslintPluginJSDoc as Plugin).rules,
  },
  mdx: {
    name: 'Mdx',
    rules: eslintPluginMdx.rules,
  },
  node: {
    name: 'Node',
    rules: (eslintPluginNode as Plugin).rules,
  },
  spellcheck: {
    name: 'Spellcheck',
    rules: (eslintPluginSpellcheck as Plugin).rules,
  },
  unicorn: {
    name: 'Unicorn',
    rules: (eslintPluginUnicorn as Plugin).rules,
  },
  vue: {
    name: 'Vue',
    rules: (eslintPluginVue as Plugin).rules,
  },
  'vue-i18n': {
    name: 'VueI18n',
    prefix: '@intlify/vue-i18n',
    rules: (eslintPluginVueI18n as Plugin).rules,
  },
  'vue-pug': {
    name: 'VuePug',
    rules: (eslintPluginVuePug as Plugin).rules,
  },
};
