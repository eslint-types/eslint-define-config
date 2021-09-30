import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type NoDuplicateAttrInheritanceRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface NoDuplicateAttrInheritanceRule {
  /**
   *
   */
  'vue/no-duplicate-attr-inheritance': NoDuplicateAttrInheritanceRuleConfig;
}
