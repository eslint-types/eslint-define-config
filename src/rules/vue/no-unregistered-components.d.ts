import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoUnregisteredComponentsRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoUnregisteredComponentsRule {
  /**
   *
   */
  'vue/no-unregistered-components': NoUnregisteredComponentsRuleConfig;
}
