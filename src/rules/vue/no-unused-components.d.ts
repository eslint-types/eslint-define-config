import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoUnusedComponentsRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoUnusedComponentsRule {
  /**
   *
   */
  'vue/no-unused-components': NoUnusedComponentsRuleConfig;
}
