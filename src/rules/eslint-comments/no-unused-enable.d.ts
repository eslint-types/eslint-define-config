import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused `eslint-enable` comments.
 *
 * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
 */
export type NoUnusedEnableRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused `eslint-enable` comments.
 *
 * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
 */
export interface NoUnusedEnableRule {
  /**
   * Disallow unused `eslint-enable` comments.
   *
   * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
   */
  'eslint-comments/no-unused-enable': NoUnusedEnableRuleConfig;
}
