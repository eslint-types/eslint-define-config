import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedComponentOptionsRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedComponentOptionsRule {
  /**
   *
   */
  'vue/no-restricted-component-options': NoRestrictedComponentOptionsRuleConfig;
}
