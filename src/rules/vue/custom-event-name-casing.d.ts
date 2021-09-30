import type { RuleConfig } from '../rule-config';

/**
 * enforce specific casing for custom event name
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export type CustomEventNameCasingRuleConfig = RuleConfig<[]>;

/**
 * enforce specific casing for custom event name
 *
 * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
 */
export interface CustomEventNameCasingRule {
  /**
   * enforce specific casing for custom event name
   *
   * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
   */
  'vue/custom-event-name-casing': CustomEventNameCasingRuleConfig;
}
