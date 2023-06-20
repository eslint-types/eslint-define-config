import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDeprecatedRouterLinkTagPropOption {
  /**
   * @minItems 1
   */
  components?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoDeprecatedRouterLinkTagPropOptions = [
  NoDeprecatedRouterLinkTagPropOption?,
];

/**
 * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
 */
export type NoDeprecatedRouterLinkTagPropRuleConfig =
  RuleConfig<NoDeprecatedRouterLinkTagPropOptions>;

/**
 * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
 */
export interface NoDeprecatedRouterLinkTagPropRule {
  /**
   * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
   */
  'vue/no-deprecated-router-link-tag-prop': NoDeprecatedRouterLinkTagPropRuleConfig;
}
