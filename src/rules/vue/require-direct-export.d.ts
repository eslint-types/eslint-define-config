import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type RequireDirectExportRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface RequireDirectExportRule {
  /**
   *
   */
  'vue/require-direct-export': RequireDirectExportRuleConfig;
}
