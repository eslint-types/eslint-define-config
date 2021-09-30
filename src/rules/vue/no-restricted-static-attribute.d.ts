import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoRestrictedStaticAttributeRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoRestrictedStaticAttributeRule {
  /**
   *
   */
  'vue/no-restricted-static-attribute': NoRestrictedStaticAttributeRuleConfig;
}
