import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
 *
 * @see [no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
 */
export type NoRefAsOperandRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
 *
 * @see [no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
 */
export interface NoRefAsOperandRule {
  /**
   * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
   *
   * @see [no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
   */
  'vue/no-ref-as-operand': NoRefAsOperandRuleConfig;
}
