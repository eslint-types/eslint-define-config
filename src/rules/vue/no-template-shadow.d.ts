import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoTemplateShadowRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoTemplateShadowRule {
  /**
   *
   */
  'vue/no-template-shadow': NoTemplateShadowRuleConfig;
}
