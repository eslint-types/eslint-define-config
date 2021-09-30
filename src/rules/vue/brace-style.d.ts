import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BraceStyleOption = '1tbs' | 'stroustrup' | 'allman';

/**
 * Options.
 */
export type BraceStyleOptions = [BraceStyleOption?];

/**
 * Enforce consistent brace style for blocks
 *
 * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
 */
export type BraceStyleRuleConfig = RuleConfig<BraceStyleOptions>;

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
