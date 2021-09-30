import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoInvalidModelKeysRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoInvalidModelKeysRule {
  /**
   *
   */
  'vue/no-invalid-model-keys': NoInvalidModelKeysRuleConfig;
}
