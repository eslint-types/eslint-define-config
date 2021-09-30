import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type ScriptIndentRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface ScriptIndentRule {
  /**
   *
   */
  'vue/script-indent': ScriptIndentRuleConfig;
}
