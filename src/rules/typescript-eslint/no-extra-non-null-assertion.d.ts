import type { RuleConfig } from '../rule-config';

/**
 * Disallow extra non-null assertion.
 *
 * @see [no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)
 */
export type NoExtraNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallow extra non-null assertion.
 *
 * @see [no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)
 */
export interface NoExtraNonNullAssertionRule {
  /**
   * Disallow extra non-null assertion.
   *
   * @see [no-extra-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md)
   */
  '@typescript-eslint/no-extra-non-null-assertion': NoExtraNonNullAssertionRuleConfig;
}
