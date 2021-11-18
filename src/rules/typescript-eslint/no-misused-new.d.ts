import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid definition of `new` and `constructor`.
 *
 * @see [no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-new.md)
 */
export type NoMisusedNewRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid definition of `new` and `constructor`.
 *
 * @see [no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-new.md)
 */
export interface NoMisusedNewRule {
  /**
   * Enforce valid definition of `new` and `constructor`.
   *
   * @see [no-misused-new](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-new.md)
   */
  '@typescript-eslint/no-misused-new': NoMisusedNewRuleConfig;
}
