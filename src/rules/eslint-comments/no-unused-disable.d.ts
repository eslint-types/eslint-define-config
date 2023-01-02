import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused `eslint-disable` comments.
 *
 * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
 */
export type NoUnusedDisableRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused `eslint-disable` comments.
 *
 * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
 */
export interface NoUnusedDisableRule {
  /**
   * Disallow unused `eslint-disable` comments.
   *
   * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
   */
  'eslint-comments/no-unused-disable': NoUnusedDisableRuleConfig;
}
