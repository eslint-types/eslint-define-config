import type { RuleConfig } from '../rule-config';

/**
 * Disallow using `path` prop with `<i18n-t>`.
 *
 * @see [no-i18n-t-path-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-i18n-t-path-prop.html)
 */
export type NoI18nTPathPropRuleConfig = RuleConfig<[]>;

/**
 * Disallow using `path` prop with `<i18n-t>`.
 *
 * @see [no-i18n-t-path-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-i18n-t-path-prop.html)
 */
export interface NoI18nTPathPropRule {
  /**
   * Disallow using `path` prop with `<i18n-t>`.
   *
   * @see [no-i18n-t-path-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-i18n-t-path-prop.html)
   */
  '@intlify/vue-i18n/no-i18n-t-path-prop': NoI18nTPathPropRuleConfig;
}
