import type { RuleConfig } from '../rule-config';

/**
 * Disallow non-null assertion in locations that may be confusing.
 *
 * @see [no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)
 */
export type NoConfusingNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallow non-null assertion in locations that may be confusing.
 *
 * @see [no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)
 */
export interface NoConfusingNonNullAssertionRule {
  /**
   * Disallow non-null assertion in locations that may be confusing.
   *
   * @see [no-confusing-non-null-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md)
   */
  '@typescript-eslint/no-confusing-non-null-assertion': NoConfusingNonNullAssertionRuleConfig;
}
