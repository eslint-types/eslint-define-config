import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoExtraParensRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoExtraParensRule {
  /**
   *
   */
  'vue/no-extra-parens': NoExtraParensRuleConfig;
}
