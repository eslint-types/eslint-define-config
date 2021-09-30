import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDeprecatedSlotAttributeRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDeprecatedSlotAttributeRule {
  /**
   *
   */
  'vue/no-deprecated-slot-attribute': NoDeprecatedSlotAttributeRuleConfig;
}
