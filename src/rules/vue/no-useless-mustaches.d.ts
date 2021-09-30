import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoUselessMustachesRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoUselessMustachesRule {
  /**
   *
   */
  'vue/no-useless-mustaches': NoUselessMustachesRuleConfig;
}
