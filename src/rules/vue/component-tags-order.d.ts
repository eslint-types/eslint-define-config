import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type ComponentTagsOrderRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface ComponentTagsOrderRule {
  /**
   *
   */
  'vue/component-tags-order': ComponentTagsOrderRuleConfig;
}
