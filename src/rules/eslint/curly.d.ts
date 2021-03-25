import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CurlyOption = 'all' | 'multi' | 'multi-line' | 'multi-or-nest' | 'ignore';

/**
 * Options.
 */
export type CurlyOptions = [CurlyOption?] | [('multi' | 'multi-line' | 'multi-or-nest')?, 'consistent'?];

/**
 * Require Following Curly Brace Conventions.
 *
 * @see [curly](https://eslint.org/docs/rules/curly)
 */
export type CurlyRuleConfig = RuleConfig<CurlyOptions>;

/**
 * Require Following Curly Brace Conventions.
 *
 * @see [curly](https://eslint.org/docs/rules/curly)
 */
export interface CurlyRule {
  /**
   * Require Following Curly Brace Conventions.
   *
   * @see [curly](https://eslint.org/docs/rules/curly)
   */
  curly: CurlyRuleConfig;
}
