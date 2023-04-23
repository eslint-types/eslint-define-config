import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of deprecated methods.
 *
 * @see [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
 */
export type NoDeprecatedRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of deprecated methods.
 *
 * @see [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
 */
export interface NoDeprecatedRule {
  /**
   * Disallow usage of deprecated methods.
   *
   * @see [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
   */
  'react/no-deprecated': NoDeprecatedRuleConfig;
}
