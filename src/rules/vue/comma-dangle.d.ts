import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type CommaDangleRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface CommaDangleRule {
  /**
   *
   */
  'vue/comma-dangle': CommaDangleRuleConfig;
}
