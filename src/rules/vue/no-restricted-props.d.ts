import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedPropsRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedPropsRule {
  /**
   *
   */
  'vue/no-restricted-props': NoRestrictedPropsRuleConfig;
}
