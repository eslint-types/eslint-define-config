import type { RuleConfig } from '../../rule-config.d.ts';

/**
 * Option.
 */
export type PreferGlobalUrlSearchParamsOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalUrlSearchParamsOptions = [
  PreferGlobalUrlSearchParamsOption?,
];

/**
 * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
 *
 * @see [prefer-global/url-search-params](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url-search-params.md)
 */
export type PreferGlobalUrlSearchParamsRuleConfig =
  RuleConfig<PreferGlobalUrlSearchParamsOptions>;

/**
 * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
 *
 * @see [prefer-global/url-search-params](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url-search-params.md)
 */
export interface PreferGlobalUrlSearchParamsRule {
  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   *
   * @see [prefer-global/url-search-params](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url-search-params.md)
   */
  'node/prefer-global/url-search-params': PreferGlobalUrlSearchParamsRuleConfig;
}
