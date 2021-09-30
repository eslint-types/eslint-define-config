import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type AttributesOrderOption = {
  /**
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  order?: any;

  /**
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  alphabetical?: any;
};

/**
 * Options.
 */
export type AttributesOrderOptions = [AttributesOrderOption?];

/**
 * enforce order of attributes
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export type AttributesOrderRuleConfig = RuleConfig<AttributesOrderOptions>;

/**
 * enforce order of attributes
 *
 * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
 */
export interface AttributesOrderRule {
  /**
   * enforce order of attributes
   *
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  'vue/attributes-order': AttributesOrderRuleConfig;
}
