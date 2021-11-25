import type { RuleConfig } from '../rule-config';

/**
 * Enforce linked key to be enclosed in parentheses.
 *
 *
 */
export type PreferLinkedKeyWithParenRuleConfig = RuleConfig<[]>;

/**
 * Enforce linked key to be enclosed in parentheses.
 *
 *
 */
export interface PreferLinkedKeyWithParenRule {
  /**
   * Enforce linked key to be enclosed in parentheses.
   *
   *
   */
  '@intlify/vue-i18n/prefer-linked-key-with-paren': PreferLinkedKeyWithParenRuleConfig;
}
