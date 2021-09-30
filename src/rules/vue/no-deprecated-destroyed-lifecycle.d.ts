import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDeprecatedDestroyedLifecycleRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDeprecatedDestroyedLifecycleRule {
  /**
   *
   */
  'vue/no-deprecated-destroyed-lifecycle': NoDeprecatedDestroyedLifecycleRuleConfig;
}
