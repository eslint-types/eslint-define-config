import type { RuleConfig } from '../rule-config';

/**
 * enforce static class names order
 *
 * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
 */
export type StaticClassNamesOrderRuleConfig = RuleConfig<[]>;

/**
 * enforce static class names order
 *
 * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
 */
export interface StaticClassNamesOrderRule {
  /**
   * enforce static class names order
   *
   * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
   */
  'vue/static-class-names-order': StaticClassNamesOrderRuleConfig;
}
