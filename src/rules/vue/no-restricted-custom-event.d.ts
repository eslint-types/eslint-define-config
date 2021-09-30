import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedCustomEventRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedCustomEventRule {
  /**
   *
   */
  'vue/no-restricted-custom-event': NoRestrictedCustomEventRuleConfig;
}
