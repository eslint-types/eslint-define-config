import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ComponentTagsOrderOption = {
  /**
   * @see [component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
   */
  order?: any;
};

/**
 * Options.
 */
export type ComponentTagsOrderOptions = [ComponentTagsOrderOption?];

/**
 * enforce order of component top-level elements
 *
 * @see [component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
 */
export type ComponentTagsOrderRuleConfig = RuleConfig<ComponentTagsOrderOptions>;

/**
 * enforce order of component top-level elements
 *
 * @see [component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
 */
export interface ComponentTagsOrderRule {
  /**
   * enforce order of component top-level elements
   *
   * @see [component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
   */
  'vue/component-tags-order': ComponentTagsOrderRuleConfig;
}
