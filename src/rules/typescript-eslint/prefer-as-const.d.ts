import type { RuleConfig } from '../rule-config';

/**
 * Prefer usage of `as const` over literal type.
 *
 * @see [prefer-as-const](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-as-const.md)
 */
export type PreferAsConstRuleConfig = RuleConfig<[]>;

/**
 * Prefer usage of `as const` over literal type.
 *
 * @see [prefer-as-const](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-as-const.md)
 */
export interface PreferAsConstRule {
  /**
   * Prefer usage of `as const` over literal type.
   *
   * @see [prefer-as-const](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-as-const.md)
   */
  '@typescript-eslint/prefer-as-const': PreferAsConstRuleConfig;
}
