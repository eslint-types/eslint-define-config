import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-deprecated.md)
 */
export type NoDeprecatedRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-deprecated.md)
 */
export interface NoDeprecatedRule {
  /**
   *
   *
   * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-deprecated.md)
   */
  'import/no-deprecated': NoDeprecatedRuleConfig;
}
