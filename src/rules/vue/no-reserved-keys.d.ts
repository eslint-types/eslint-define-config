import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoReservedKeysRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoReservedKeysRule {
  /**
   *
   */
  'vue/no-reserved-keys': NoReservedKeysRuleConfig;
}
