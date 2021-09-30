import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoParsingErrorRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoParsingErrorRule {
  /**
   *
   */
  'vue/no-parsing-error': NoParsingErrorRuleConfig;
}
