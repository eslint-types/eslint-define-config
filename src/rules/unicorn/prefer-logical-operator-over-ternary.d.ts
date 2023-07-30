import type { RuleConfig } from '../rule-config';

/**
 * Prefer using a logical operator over a ternary.
 *
 * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-logical-operator-over-ternary.md)
 */
export type PreferLogicalOperatorOverTernaryRuleConfig = RuleConfig<[]>;

/**
 * Prefer using a logical operator over a ternary.
 *
 * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-logical-operator-over-ternary.md)
 */
export interface PreferLogicalOperatorOverTernaryRule {
  /**
   * Prefer using a logical operator over a ternary.
   *
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': PreferLogicalOperatorOverTernaryRuleConfig;
}
