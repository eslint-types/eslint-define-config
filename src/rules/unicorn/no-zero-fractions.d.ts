import type { RuleConfig } from '../rule-config';

/**
 * Disallow number literals with zero fractions or dangling dots.
 *
 * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-zero-fractions.md)
 */
export type NoZeroFractionsRuleConfig = RuleConfig<[]>;

/**
 * Disallow number literals with zero fractions or dangling dots.
 *
 * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-zero-fractions.md)
 */
export interface NoZeroFractionsRule {
  /**
   * Disallow number literals with zero fractions or dangling dots.
   *
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': NoZeroFractionsRuleConfig;
}
