import type { RuleConfig } from '../rule-config';

/**
 * Prefer initializing each enums member value.
 *
 * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
 */
export type PreferEnumInitializersRuleConfig = RuleConfig<[]>;

/**
 * Prefer initializing each enums member value.
 *
 * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
 */
export interface PreferEnumInitializersRule {
  /**
   * Prefer initializing each enums member value.
   *
   * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
   */
  '@typescript-eslint/prefer-enum-initializers': PreferEnumInitializersRuleConfig;
}
