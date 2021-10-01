import type { RuleConfig } from '../rule-config';

/**
 * Enforce `includes` method over `indexOf` method.
 *
 * @see [prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-includes.md)
 */
export type PreferIncludesRuleConfig = RuleConfig<[]>;

/**
 * Enforce `includes` method over `indexOf` method.
 *
 * @see [prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-includes.md)
 */
export interface PreferIncludesRule {
  /**
   * Enforce `includes` method over `indexOf` method.
   *
   * @see [prefer-includes](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/prefer-includes.md)
   */
  '@typescript-eslint/prefer-includes': PreferIncludesRuleConfig;
}
