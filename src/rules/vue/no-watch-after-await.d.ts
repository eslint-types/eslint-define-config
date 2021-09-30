import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoWatchAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoWatchAfterAwaitRule {
  /**
   *
   */
  'vue/no-watch-after-await': NoWatchAfterAwaitRuleConfig;
}
