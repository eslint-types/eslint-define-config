import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ArrowParensConfig {
  requireForBlockBody?: boolean;
}

/**
 * Option.
 */
export type ArrowParensOption = 'always' | 'as-needed';

/**
 * Options.
 */
export type ArrowParensOptions = [ArrowParensOption?, ArrowParensConfig?];

/**
 * Require parentheses around arrow function arguments.
 *
 * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
 */
export type ArrowParensRuleConfig = RuleConfig<ArrowParensOptions>;

/**
 * Require parentheses around arrow function arguments.
 *
 * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
 */
export interface ArrowParensRule {
  /**
   * Require parentheses around arrow function arguments.
   *
   * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
   */
  'arrow-parens': ArrowParensRuleConfig;
}
