import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoEmptyComponentBlockRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoEmptyComponentBlockRule {
  /**
   *
   */
  'vue/no-empty-component-block': NoEmptyComponentBlockRuleConfig;
}
