import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DynamicImportChunknameOption {
  importFunctions?: string[];
  webpackChunknameFormat?: string;
  [k: string]: any;
}

/**
 * Options.
 */
export type DynamicImportChunknameOptions = [DynamicImportChunknameOption?];

/**
 *
 * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/dynamic-import-chunkname.md)
 */
export type DynamicImportChunknameRuleConfig =
  RuleConfig<DynamicImportChunknameOptions>;

/**
 *
 * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/dynamic-import-chunkname.md)
 */
export interface DynamicImportChunknameRule {
  /**
   *
   * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/dynamic-import-chunkname.md)
   */
  'import/dynamic-import-chunkname': DynamicImportChunknameRuleConfig;
}
