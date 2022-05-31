import type { RuleConfig } from '../rule-config';

/**
 * Require each enum member value to be explicitly initialized.
 *
 * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
 */
export type PreferEnumInitializersRuleConfig = RuleConfig<[]>;

/**
 * Require each enum member value to be explicitly initialized.
 *
 * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
 */
export interface PreferEnumInitializersRule {
  /**
   * Require each enum member value to be explicitly initialized.
   *
   * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
   */
  '@typescript-eslint/prefer-enum-initializers': PreferEnumInitializersRuleConfig;
}
