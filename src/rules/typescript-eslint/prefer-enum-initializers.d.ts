import type { RuleConfig } from '../rule-config';

/**
 * Prefer initializing each enums member value.
 *
 * @see [prefer-enum-initializers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)
 */
export type PreferEnumInitializersRuleConfig = RuleConfig<[]>;

/**
 * Prefer initializing each enums member value.
 *
 * @see [prefer-enum-initializers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)
 */
export interface PreferEnumInitializersRule {
  /**
   * Prefer initializing each enums member value.
   *
   * @see [prefer-enum-initializers](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md)
   */
  '@typescript-eslint/prefer-enum-initializers': PreferEnumInitializersRuleConfig;
}
