import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalUrlOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalUrlOptions = [PreferGlobalUrlOption?];

/**
 * Enforce either `URL` or `require("url").URL`.
 *
 * @see [prefer-global/url](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url.md)
 */
export type PreferGlobalUrlRuleConfig = RuleConfig<PreferGlobalUrlOptions>;

/**
 * Enforce either `URL` or `require("url").URL`.
 *
 * @see [prefer-global/url](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url.md)
 */
export interface PreferGlobalUrlRule {
  /**
   * Enforce either `URL` or `require("url").URL`.
   *
   * @see [prefer-global/url](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-global/url.md)
   */
  'n/prefer-global/url': PreferGlobalUrlRuleConfig;
}
