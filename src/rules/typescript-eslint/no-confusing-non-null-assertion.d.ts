import type { RuleConfig } from '../rule-config';

/**
 * Disallow non-null assertion in locations that may be confusing.
 *
 * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
 */
export type NoConfusingNonNullAssertionRuleConfig = RuleConfig<[]>;

/**
 * Disallow non-null assertion in locations that may be confusing.
 *
 * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
 */
export interface NoConfusingNonNullAssertionRule {
  /**
   * Disallow non-null assertion in locations that may be confusing.
   *
   * @see [no-confusing-non-null-assertion](https://typescript-eslint.io/rules/no-confusing-non-null-assertion)
   */
  '@typescript-eslint/no-confusing-non-null-assertion': NoConfusingNonNullAssertionRuleConfig;
}
