import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface OrderInComponentsOption {
  order?: any[];
}

/**
 * Options.
 */
export type OrderInComponentsOptions = [OrderInComponentsOption?];

/**
 * Enforce order of properties in components.
 *
 * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
 */
export type OrderInComponentsRuleConfig = RuleConfig<OrderInComponentsOptions>;

/**
 * Enforce order of properties in components.
 *
 * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
 */
export interface OrderInComponentsRule {
  /**
   * Enforce order of properties in components.
   *
   * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
   */
  'vue/order-in-components': OrderInComponentsRuleConfig;
}
