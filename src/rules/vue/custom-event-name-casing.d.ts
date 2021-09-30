import type { RuleConfig } from '../rule-config';

/**
 * Enforce specific casing for custom event name
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export type CustomEventNameCasingRuleConfig = RuleConfig<[]>;

/**
 * Enforce specific casing for custom event name
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export interface CustomEventNameCasingRule {
  /**
   * Enforce specific casing for custom event name
   *
   * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
   */
  'vue/custom-event-name-casing': CustomEventNameCasingRuleConfig;
}
