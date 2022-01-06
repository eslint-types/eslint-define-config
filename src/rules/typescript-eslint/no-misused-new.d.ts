import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid definition of `new` and `constructor`.
 *
 * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
 */
export type NoMisusedNewRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid definition of `new` and `constructor`.
 *
 * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
 */
export interface NoMisusedNewRule {
  /**
   * Enforce valid definition of `new` and `constructor`.
   *
   * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
   */
  '@typescript-eslint/no-misused-new': NoMisusedNewRuleConfig;
}
