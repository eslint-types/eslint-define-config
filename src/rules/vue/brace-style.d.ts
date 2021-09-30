import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent brace style for blocks
 *
 * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
 */
export type BraceStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent brace style for blocks
 *
 * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
 */
export interface BraceStyleRule {
  /**
   * Enforce consistent brace style for blocks
   *
   * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
   */
  'vue/brace-style': BraceStyleRuleConfig;
}
