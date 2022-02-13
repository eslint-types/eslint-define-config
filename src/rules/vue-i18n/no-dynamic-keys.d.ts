import type { RuleConfig } from '../rule-config';

/**
 * Disallow localization dynamic keys at localization methods.
 *
 * @see [no-dynamic-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-dynamic-keys.html)
 */
export type NoDynamicKeysRuleConfig = RuleConfig<[]>;

/**
 * Disallow localization dynamic keys at localization methods.
 *
 * @see [no-dynamic-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-dynamic-keys.html)
 */
export interface NoDynamicKeysRule {
  /**
   * Disallow localization dynamic keys at localization methods.
   *
   * @see [no-dynamic-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-dynamic-keys.html)
   */
  '@intlify/vue-i18n/no-dynamic-keys': NoDynamicKeysRuleConfig;
}
