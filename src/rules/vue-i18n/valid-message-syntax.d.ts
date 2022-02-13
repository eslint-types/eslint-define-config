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
 * @see [valid-message-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html)
 */
export type ValidMessageSyntaxRuleConfig =
  RuleConfig<ValidMessageSyntaxOptions>;

/**
 * Disallow invalid message syntax.
 *
 * @see [valid-message-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html)
 */
export interface ValidMessageSyntaxRule {
  /**
   * Disallow invalid message syntax.
   *
   * @see [valid-message-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html)
   */
  '@intlify/vue-i18n/valid-message-syntax': ValidMessageSyntaxRuleConfig;
}
