import * as eslint from 'eslint';
import * as eslintPluginDeprecation from 'eslint-plugin-deprecation';
// @ts-expect-error
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
// @ts-expect-error
import * as eslintPluginImport from 'eslint-plugin-import';
// @ts-expect-error
import eslintPluginJSDoc from 'eslint-plugin-jsdoc';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import * as eslintPluginMdx from 'eslint-plugin-mdx';
// @ts-expect-error
import eslintPluginPromise from 'eslint-plugin-promise';
// @ts-expect-error
import eslintPluginNode from 'eslint-plugin-node';
// @ts-expect-error
import eslintPluginN from 'eslint-plugin-n';
import * as eslintPluginSonarJS from 'eslint-plugin-sonarjs';
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
export const PLUGIN_REGISTRY: Readonly<Record<string, Plugin>> = {
  deprecation: {
    name: 'Deprecation',
    rules:
      // @ts-expect-error: throw error when plugin successfully updated their type defs
      eslintPluginDeprecation.rules as Plugin['rules'],
  },
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
  'eslint-comments': {
    name: 'EslintComments',
    rules: (eslintPluginEslintComments as Plugin).rules,
  },
  jsdoc: {
    name: 'JSDoc',
    prefix: 'jsdoc',
    rules: (eslintPluginJSDoc as Plugin).rules,
  },
  jsonc: {
    name: 'Jsonc',
    rules:
      // @ts-expect-error: throw error when plugin successfully updated their type defs
      eslintPluginJsonc.rules as Plugin['rules'],
  },
  mdx: {
    name: 'Mdx',
    rules: eslintPluginMdx.rules,
  },
  n: {
    name: 'N',
    rules: (eslintPluginN as Plugin).rules,
  },
  node: {
    name: 'Node',
    rules: (eslintPluginNode as Plugin).rules,
  },
  promise: {
    name: 'Promise',
    rules: (eslintPluginPromise as Plugin).rules,
  },
  sonarjs: {
    name: 'SonarJS',
    prefix: 'sonarjs',
    rules: eslintPluginSonarJS.rules,
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
} as const;
