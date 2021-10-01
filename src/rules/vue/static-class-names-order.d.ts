import type { RuleConfig } from '../rule-config';

/**
 * Enforce static class names order.
 *
 * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
 */
export type StaticClassNamesOrderRuleConfig = RuleConfig<[]>;

/**
 * Enforce static class names order.
 *
 * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
 */
export interface StaticClassNamesOrderRule {
  /**
   * Enforce static class names order.
   *
   * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
   */
  'vue/static-class-names-order': StaticClassNamesOrderRuleConfig;
}
