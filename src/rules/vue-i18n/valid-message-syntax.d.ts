import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ValidMessageSyntaxOption {
  allowNotString?: boolean;
}

/**
 * Options.
 */
export type ValidMessageSyntaxOptions = [ValidMessageSyntaxOption?];

/**
 * Disallow invalid message syntax.
 *
 *
 */
export type ValidMessageSyntaxRuleConfig = RuleConfig<ValidMessageSyntaxOptions>;

/**
 * Disallow invalid message syntax.
 *
 *
 */
export interface ValidMessageSyntaxRule {
  /**
   * Disallow invalid message syntax.
   *
   *
   */
  '@intlify/vue-i18n/valid-message-syntax': ValidMessageSyntaxRuleConfig;
}
