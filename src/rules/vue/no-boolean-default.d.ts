import type { RuleConfig } from '../rule-config';

/**
 * Disallow boolean defaults
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export type NoBooleanDefaultRuleConfig = RuleConfig<[]>;

/**
 * Disallow boolean defaults
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export interface NoBooleanDefaultRule {
  /**
   * Disallow boolean defaults
   *
   * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
   */
  'vue/no-boolean-default': NoBooleanDefaultRuleConfig;
}
