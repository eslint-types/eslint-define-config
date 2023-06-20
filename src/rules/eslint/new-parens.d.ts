import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NewParensOption = 'always' | 'never';

/**
 * Options.
 */
export type NewParensOptions = [NewParensOption?];

/**
 * Enforce or disallow parentheses when invoking a constructor with no arguments.
 *
 * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
 */
export type NewParensRuleConfig = RuleConfig<NewParensOptions>;

/**
 * Enforce or disallow parentheses when invoking a constructor with no arguments.
 *
 * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
 */
export interface NewParensRule {
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments.
   *
   * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
   */
  'new-parens': NewParensRuleConfig;
}
