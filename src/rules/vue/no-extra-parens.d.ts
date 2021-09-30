import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export type NoExtraParensRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': NoExtraParensRuleConfig;
}
