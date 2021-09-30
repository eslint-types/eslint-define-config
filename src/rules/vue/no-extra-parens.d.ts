import type { RuleConfig } from '../rule-config';

/**
 * disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export type NoExtraParensRuleConfig = RuleConfig<[]>;

/**
 * disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export interface NoExtraParensRule {
  /**
   * disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': NoExtraParensRuleConfig;
}
