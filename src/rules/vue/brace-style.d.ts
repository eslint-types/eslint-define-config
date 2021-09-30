import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent brace style for blocks
 *
 * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
 */
export type BraceStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent brace style for blocks
 *
 * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
 */
export interface BraceStyleRule {
  /**
   * enforce consistent brace style for blocks
   *
   * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
   */
  'vue/brace-style': BraceStyleRuleConfig;
}
