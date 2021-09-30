import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent spacing inside parentheses
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export type SpaceInParensRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent spacing inside parentheses
 *
 * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
 */
export interface SpaceInParensRule {
  /**
   * enforce consistent spacing inside parentheses
   *
   * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
   */
  'vue/space-in-parens': SpaceInParensRuleConfig;
}
