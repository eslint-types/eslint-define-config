import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary semicolons.
 *
 * @see [no-extra-semi](https://typescript-eslint.io/rules/no-extra-semi)
 */
export type NoExtraSemiRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary semicolons.
 *
 * @see [no-extra-semi](https://typescript-eslint.io/rules/no-extra-semi)
 */
export interface NoExtraSemiRule {
  /**
   * Disallow unnecessary semicolons.
   *
   * @see [no-extra-semi](https://typescript-eslint.io/rules/no-extra-semi)
   */
  '@typescript-eslint/no-extra-semi': NoExtraSemiRuleConfig;
}
