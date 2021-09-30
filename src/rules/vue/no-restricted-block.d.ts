import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedBlockRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedBlockRule {
  /**
   *
   */
  'vue/no-restricted-block': NoRestrictedBlockRuleConfig;
}
