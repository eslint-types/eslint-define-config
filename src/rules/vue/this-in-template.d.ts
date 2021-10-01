import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ThisInTemplateOption = 'always' | 'never';

/**
 * Options.
 */
export type ThisInTemplateOptions = [ThisInTemplateOption?];

/**
 * Disallow usage of `this` in template.
 *
 * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
 */
export type ThisInTemplateRuleConfig = RuleConfig<ThisInTemplateOptions>;

/**
 * Disallow usage of `this` in template.
 *
 * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
 */
export interface ThisInTemplateRule {
  /**
   * Disallow usage of `this` in template.
   *
   * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
   */
  'vue/this-in-template': ThisInTemplateRuleConfig;
}
