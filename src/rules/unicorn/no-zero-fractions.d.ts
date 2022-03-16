import type { RuleConfig } from '../rule-config';

/**
 * Disallow number literals with zero fractions or dangling dots.
 *
 * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-zero-fractions.md)
 */
export type NoZeroFractionsRuleConfig = RuleConfig<[]>;

/**
 * Disallow number literals with zero fractions or dangling dots.
 *
 * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-zero-fractions.md)
 */
export interface NoZeroFractionsRule {
  /**
   * Disallow number literals with zero fractions or dangling dots.
   *
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v41.0.0/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': NoZeroFractionsRuleConfig;
}
