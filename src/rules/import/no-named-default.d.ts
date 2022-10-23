import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-default.md)
 */
export type NoNamedDefaultRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-default.md)
 */
export interface NoNamedDefaultRule {
  /**
   *
   * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-default.md)
   */
  'import/no-named-default': NoNamedDefaultRuleConfig;
}
