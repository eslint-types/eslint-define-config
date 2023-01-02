import type { RuleConfig } from '../rule-config';

/**
 * Disallow parentheses around the expression.
 *
 * @see [no-parenthesized](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)
 */
export type NoParenthesizedRuleConfig = RuleConfig<[]>;

/**
 * Disallow parentheses around the expression.
 *
 * @see [no-parenthesized](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)
 */
export interface NoParenthesizedRule {
  /**
   * Disallow parentheses around the expression.
   *
   * @see [no-parenthesized](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)
   */
  'jsonc/no-parenthesized': NoParenthesizedRuleConfig;
}
