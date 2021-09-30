import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoUnusedRefsRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoUnusedRefsRule {
  /**
   *
   */
  'vue/no-unused-refs': NoUnusedRefsRuleConfig;
}
