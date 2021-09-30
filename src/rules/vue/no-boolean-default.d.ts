import type { RuleConfig } from '../rule-config';

/**
 * disallow boolean defaults
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export type NoBooleanDefaultRuleConfig = RuleConfig<[]>;

/**
 * disallow boolean defaults
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export interface NoBooleanDefaultRule {
  /**
   * disallow boolean defaults
   *
   * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
   */
  'vue/no-boolean-default': NoBooleanDefaultRuleConfig;
}
