import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `as const` over literal type.
 *
 * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
 */
export type PreferAsConstRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `as const` over literal type.
 *
 * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
 */
export interface PreferAsConstRule {
  /**
   * Enforce the use of `as const` over literal type.
   *
   * @see [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)
   */
  '@typescript-eslint/prefer-as-const': PreferAsConstRuleConfig;
}
