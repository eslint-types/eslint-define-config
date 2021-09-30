import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedCallAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedCallAfterAwaitRule {
  /**
   *
   */
  'vue/no-restricted-call-after-await': NoRestrictedCallAfterAwaitRuleConfig;
}
