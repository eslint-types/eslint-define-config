import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoEmptyPatternRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoEmptyPatternRule {
  /**
   *
   */
  'vue/no-empty-pattern': NoEmptyPatternRuleConfig;
}
