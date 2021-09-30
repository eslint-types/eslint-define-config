import type { RuleConfig } from '../rule-config';

/**
 * enforce render function to always return value
 *
 * @see [require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
 */
export type RequireRenderReturnRuleConfig = RuleConfig<[]>;

/**
 * enforce render function to always return value
 *
 * @see [require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
 */
export interface RequireRenderReturnRule {
  /**
   * enforce render function to always return value
   *
   * @see [require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
   */
  'vue/require-render-return': RequireRenderReturnRuleConfig;
}
