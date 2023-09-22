import type { RuleConfig } from '../rule-config';

/**
 * Forbid named default exports.
 *
 * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-default.md)
 */
export type NoNamedDefaultRuleConfig = RuleConfig<[]>;

/**
 * Forbid named default exports.
 *
 * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-default.md)
 */
export interface NoNamedDefaultRule {
  /**
   * Forbid named default exports.
   *
   * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-named-default.md)
   */
  'import/no-named-default': NoNamedDefaultRuleConfig;
}
