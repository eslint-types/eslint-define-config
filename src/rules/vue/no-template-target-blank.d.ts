import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoTemplateTargetBlankRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoTemplateTargetBlankRule {
  /**
   *
   */
  'vue/no-template-target-blank': NoTemplateTargetBlankRuleConfig;
}
