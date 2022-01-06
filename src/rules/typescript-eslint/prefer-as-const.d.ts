import type { RuleConfig } from '../rule-config';

/**
 * Prefer usage of `as const` over literal type.
 *
 * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
 */
export type PreferAsConstRuleConfig = RuleConfig<[]>;

/**
 * Prefer usage of `as const` over literal type.
 *
 * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
 */
export interface PreferAsConstRule {
  /**
   * Prefer usage of `as const` over literal type.
   *
   * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
   */
  '@typescript-eslint/prefer-as-const': PreferAsConstRuleConfig;
}
