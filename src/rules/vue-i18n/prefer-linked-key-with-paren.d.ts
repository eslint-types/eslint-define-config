import type { RuleConfig } from '../rule-config';

/**
 * Enforce linked key to be enclosed in parentheses.
 *
 * @see [prefer-linked-key-with-paren](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-linked-key-with-paren.html)
 */
export type PreferLinkedKeyWithParenRuleConfig = RuleConfig<[]>;

/**
 * Enforce linked key to be enclosed in parentheses.
 *
 * @see [prefer-linked-key-with-paren](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-linked-key-with-paren.html)
 */
export interface PreferLinkedKeyWithParenRule {
  /**
   * Enforce linked key to be enclosed in parentheses.
   *
   * @see [prefer-linked-key-with-paren](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-linked-key-with-paren.html)
   */
  '@intlify/vue-i18n/prefer-linked-key-with-paren': PreferLinkedKeyWithParenRuleConfig;
}
