import type { RuleConfig } from '../rule-config';

/**
 * Enforce `includes` method over `indexOf` method.
 *
 * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
 */
export type PreferIncludesRuleConfig = RuleConfig<[]>;

/**
 * Enforce `includes` method over `indexOf` method.
 *
 * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
 */
export interface PreferIncludesRule {
  /**
   * Enforce `includes` method over `indexOf` method.
   *
   * @see [prefer-includes](https://typescript-eslint.io/rules/prefer-includes)
   */
  '@typescript-eslint/prefer-includes': PreferIncludesRuleConfig;
}
