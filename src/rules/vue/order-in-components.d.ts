import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type OrderInComponentsOption = {
  /**
   * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
   */
  order?: any;
};

/**
 * Options.
 */
export type OrderInComponentsOptions = [OrderInComponentsOption?];

/**
 * enforce order of properties in components
 *
 * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
 */
export type OrderInComponentsRuleConfig = RuleConfig<OrderInComponentsOptions>;

/**
 * enforce order of properties in components
 *
 * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
 */
export interface OrderInComponentsRule {
  /**
   * enforce order of properties in components
   *
   * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
   */
  'vue/order-in-components': OrderInComponentsRuleConfig;
}
