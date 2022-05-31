import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `for-of` loop over the standard `for` loop where possible.
 *
 * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
 */
export type PreferForOfRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `for-of` loop over the standard `for` loop where possible.
 *
 * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
 */
export interface PreferForOfRule {
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible.
   *
   * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
   */
  '@typescript-eslint/prefer-for-of': PreferForOfRuleConfig;
}
