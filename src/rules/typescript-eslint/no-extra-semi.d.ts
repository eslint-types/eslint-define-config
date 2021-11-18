import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary semicolons.
 *
 * @see [no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-semi.md)
 */
export type NoExtraSemiRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary semicolons.
 *
 * @see [no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-semi.md)
 */
export interface NoExtraSemiRule {
  /**
   * Disallow unnecessary semicolons.
   *
   * @see [no-extra-semi](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-semi.md)
   */
  '@typescript-eslint/no-extra-semi': NoExtraSemiRuleConfig;
}
