import type { RuleConfig } from '../rule-config';

/**
 * Disallow specific custom event
 *
 * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
 */
export type NoRestrictedCustomEventRuleConfig = RuleConfig<[]>;

/**
 * Disallow specific custom event
 *
 * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
 */
export interface NoRestrictedCustomEventRule {
  /**
   * Disallow specific custom event
   *
   * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
   */
  'vue/no-restricted-custom-event': NoRestrictedCustomEventRuleConfig;
}