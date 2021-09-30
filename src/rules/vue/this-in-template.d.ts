import type { RuleConfig } from '../rule-config';

/**
 * disallow usage of `this` in template
 *
 * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
 */
export type ThisInTemplateRuleConfig = RuleConfig<[]>;

/**
 * disallow usage of `this` in template
 *
 * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
 */
export interface ThisInTemplateRule {
  /**
   * disallow usage of `this` in template
   *
   * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
   */
  'vue/this-in-template': ThisInTemplateRuleConfig;
}
