import type { RuleConfig } from '../rule-config';

/**
 * enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export type MaxLenRuleConfig = RuleConfig<[]>;

/**
 * enforce a maximum line length
 *
 * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
 */
export interface MaxLenRule {
  /**
   * enforce a maximum line length
   *
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': MaxLenRuleConfig;
}
