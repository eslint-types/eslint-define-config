import type { RuleConfig } from '../rule-config';

/**
 * Disallow comparisons where both sides are exactly the same.
 *
 * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
 */
export type NoSelfCompareRuleConfig = RuleConfig<[]>;

/**
 * Disallow comparisons where both sides are exactly the same.
 *
 * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
 */
export interface NoSelfCompareRule {
  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
   */
  'no-self-compare': NoSelfCompareRuleConfig;
}
