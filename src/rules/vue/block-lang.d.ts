import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type BlockLangRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface BlockLangRule {
  /**
   *
   */
  'vue/block-lang': BlockLangRuleConfig;
}
