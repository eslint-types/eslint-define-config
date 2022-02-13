import type { RuleConfig } from '../rule-config';

/**
 * Disallow missing locale message key at localization methods.
 *
 * @see [no-missing-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys.html)
 */
export type NoMissingKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow missing locale message key at localization methods.
 *
 * @see [no-missing-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys.html)
 */
export interface NoMissingKeysRule {
  /**
   * Disallow missing locale message key at localization methods.
   *
   * @see [no-missing-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys.html)
   */
  '@intlify/vue-i18n/no-missing-keys': NoMissingKeysRuleConfig;
}
