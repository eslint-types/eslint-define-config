import type { RuleConfig } from '../rule-config';

/**
 * Enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export type MaxLenRuleConfig = RuleConfig<[]>;

/**
 * Enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export interface MaxLenRule {
  /**
   * Enforce a maximum line length
   *
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': MaxLenRuleConfig;
}
