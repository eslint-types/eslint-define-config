import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoUnusedPropertiesRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoUnusedPropertiesRule {
  /**
   *
   */
  'vue/no-unused-properties': NoUnusedPropertiesRuleConfig;
}
