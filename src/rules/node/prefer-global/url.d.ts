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
 * @see [prefer-global/url](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url.md)
 */
export type PreferGlobalUrlRuleConfig = RuleConfig<PreferGlobalUrlOptions>;

/**
 * Enforce either `URL` or `require("url").URL`.
 *
 * @see [prefer-global/url](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url.md)
 */
export interface PreferGlobalUrlRule {
  /**
   * Enforce either `URL` or `require("url").URL`.
   *
   * @see [prefer-global/url](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global/url.md)
   */
  'node/prefer-global/url': PreferGlobalUrlRuleConfig;
}
