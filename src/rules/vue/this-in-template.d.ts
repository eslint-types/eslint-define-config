import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type ThisInTemplateRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface ThisInTemplateRule {
  /**
   *
   */
  'vue/this-in-template': ThisInTemplateRuleConfig;
}
