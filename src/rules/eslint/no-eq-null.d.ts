import type { RuleConfig } from '../rule-config';

/**
 * Disallow `null` comparisons without type-checking operators.
 *
 * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
 */
export type NoEqNullRuleConfig = RuleConfig<[]>;

/**
 * Disallow `null` comparisons without type-checking operators.
 *
 * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
 */
export interface NoEqNullRule {
  /**
   * Disallow `null` comparisons without type-checking operators.
   *
   * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
   */
  'no-eq-null': NoEqNullRuleConfig;
}
