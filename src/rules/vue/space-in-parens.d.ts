import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceInParensOption = 'always' | 'never';

/**
 * Options.
 */
export type SpaceInParensOptions = [SpaceInParensOption?];

/**
 * Enforce consistent spacing inside parentheses
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export type SpaceInParensRuleConfig = RuleConfig<SpaceInParensOptions>;

/**
 * Enforce consistent spacing inside parentheses
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export interface SpaceInParensRule {
  /**
   * Enforce consistent spacing inside parentheses
   *
   * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
   */
  'vue/space-in-parens': SpaceInParensRuleConfig;
}
