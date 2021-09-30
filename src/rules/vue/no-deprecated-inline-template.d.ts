import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDeprecatedInlineTemplateRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDeprecatedInlineTemplateRule {
  /**
   *
   */
  'vue/no-deprecated-inline-template': NoDeprecatedInlineTemplateRuleConfig;
}
