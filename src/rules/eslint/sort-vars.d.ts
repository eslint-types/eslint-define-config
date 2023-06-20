import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortVarsOption {
  ignoreCase?: boolean;
}

/**
 * Options.
 */
export type SortVarsOptions = [SortVarsOption?];

/**
 * Require variables within the same declaration block to be sorted.
 *
 * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
 */
export type SortVarsRuleConfig = RuleConfig<SortVarsOptions>;

/**
 * Require variables within the same declaration block to be sorted.
 *
 * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
 */
export interface SortVarsRule {
  /**
   * Require variables within the same declaration block to be sorted.
   *
   * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
   */
  'sort-vars': SortVarsRuleConfig;
}
