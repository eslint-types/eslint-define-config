import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoMultiSpacesRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoMultiSpacesRule {
  /**
   *
   */
  'vue/no-multi-spaces': NoMultiSpacesRuleConfig;
}
