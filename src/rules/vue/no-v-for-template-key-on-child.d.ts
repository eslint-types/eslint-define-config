import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoVForTemplateKeyOnChildRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoVForTemplateKeyOnChildRule {
  /**
   *
   */
  'vue/no-v-for-template-key-on-child': NoVForTemplateKeyOnChildRuleConfig;
}
