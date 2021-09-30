import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoLifecycleAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoLifecycleAfterAwaitRule {
  /**
   *
   */
  'vue/no-lifecycle-after-await': NoLifecycleAfterAwaitRuleConfig;
}
