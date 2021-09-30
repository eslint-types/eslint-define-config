import type { RuleConfig } from '../rule-config';

/**
 * disallow unnecessary concatenation of literals or template literals
 *
 * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
 */
export type NoUselessConcatRuleConfig = RuleConfig<[]>;

/**
 * disallow unnecessary concatenation of literals or template literals
 *
 * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
 */
export interface NoUselessConcatRule {
  /**
   * disallow unnecessary concatenation of literals or template literals
   *
   * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
   */
  'vue/no-useless-concat': NoUselessConcatRuleConfig;
}
