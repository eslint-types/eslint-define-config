import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type AttributeHyphenationRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface AttributeHyphenationRule {
  /**
   *
   */
  'vue/attribute-hyphenation': AttributeHyphenationRuleConfig;
}
