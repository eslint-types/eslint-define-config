import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDeprecatedScopeAttributeRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDeprecatedScopeAttributeRule {
  /**
   *
   */
  'vue/no-deprecated-scope-attribute': NoDeprecatedScopeAttributeRuleConfig;
}
