import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type MaxAttributesPerLineRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface MaxAttributesPerLineRule {
  /**
   *
   */
  'vue/max-attributes-per-line': MaxAttributesPerLineRuleConfig;
}
