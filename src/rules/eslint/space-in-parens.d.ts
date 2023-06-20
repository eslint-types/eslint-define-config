import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface SpaceInParensConfig {
  exceptions?: ('{}' | '[]' | '()' | 'empty')[];
}

/**
 * Option.
 */
export type SpaceInParensOption = 'always' | 'never';

/**
 * Options.
 */
export type SpaceInParensOptions = [SpaceInParensOption?, SpaceInParensConfig?];

/**
 * Enforce consistent spacing inside parentheses.
 *
 * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
 */
export type SpaceInParensRuleConfig = RuleConfig<SpaceInParensOptions>;

/**
 * Enforce consistent spacing inside parentheses.
 *
 * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
 */
export interface SpaceInParensRule {
  /**
   * Enforce consistent spacing inside parentheses.
   *
   * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
   */
  'space-in-parens': SpaceInParensRuleConfig;
}
