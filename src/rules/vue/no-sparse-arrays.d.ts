import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoSparseArraysRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoSparseArraysRule {
  /**
   *
   */
  'vue/no-sparse-arrays': NoSparseArraysRuleConfig;
}
