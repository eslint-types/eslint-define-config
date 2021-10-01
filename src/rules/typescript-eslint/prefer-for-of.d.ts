import type { RuleConfig } from '../rule-config';

/**
 * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
 *
 * @see [prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-for-of.md)
 */
export type PreferForOfRuleConfig = RuleConfig<[]>;

/**
 * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
 *
 * @see [prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-for-of.md)
 */
export interface PreferForOfRule {
  /**
   * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
   *
   * @see [prefer-for-of](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-for-of.md)
   */
  '@typescript-eslint/prefer-for-of': PreferForOfRuleConfig;
}
