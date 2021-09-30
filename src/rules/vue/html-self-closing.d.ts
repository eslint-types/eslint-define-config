import type { RuleConfig } from '../rule-config';

/**
 *
 */
export type HtmlSelfClosingRuleConfig = RuleConfig<[]>;

/**
 *
 */
export interface HtmlSelfClosingRule {
  /**
   *
   */
  'vue/html-self-closing': HtmlSelfClosingRuleConfig;
}
