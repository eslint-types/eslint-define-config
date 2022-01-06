import type { RuleConfig } from '../rule-config';

/**
 * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
 *
 * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
 */
export type PreferForOfRuleConfig = RuleConfig<[]>;

/**
 * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
 *
 * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
 */
export interface PreferForOfRule {
  /**
   * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
   *
   * @see [prefer-for-of](https://typescript-eslint.io/rules/prefer-for-of)
   */
  '@typescript-eslint/prefer-for-of': PreferForOfRuleConfig;
}
