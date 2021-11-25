import type { RuleConfig } from '../rule-config';

/**
 * Disallow using `path` prop with `<i18n-t>`.
 *
 *
 */
export type NoI18nTPathPropRuleConfig = RuleConfig<[]>;

/**
 * Disallow using `path` prop with `<i18n-t>`.
 *
 *
 */
export interface NoI18nTPathPropRule {
  /**
   * Disallow using `path` prop with `<i18n-t>`.
   *
   *
   */
  '@intlify/vue-i18n/no-i18n-t-path-prop': NoI18nTPathPropRuleConfig;
}
