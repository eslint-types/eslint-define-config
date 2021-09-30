import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDupeKeysRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDupeKeysRule {
  /**
   *
   */
  'vue/no-dupe-keys': NoDupeKeysRuleConfig;
}
