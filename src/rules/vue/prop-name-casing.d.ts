import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type PropNameCasingRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface PropNameCasingRule {
  /**
   *
   */
  'vue/prop-name-casing': PropNameCasingRuleConfig;
}
