import type { RuleConfig } from '../../rule-config';

/**
 * Enforce `require("dns").promises`.
 *
 * @see [prefer-promises/dns](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/dns.md)
 */
export type PreferPromisesDnsRuleConfig = RuleConfig<[]>;

/**
 * Enforce `require("dns").promises`.
 *
 * @see [prefer-promises/dns](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/dns.md)
 */
export interface PreferPromisesDnsRule {
  /**
   * Enforce `require("dns").promises`.
   *
   * @see [prefer-promises/dns](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/prefer-promises/dns.md)
   */
  'n/prefer-promises/dns': PreferPromisesDnsRuleConfig;
}
