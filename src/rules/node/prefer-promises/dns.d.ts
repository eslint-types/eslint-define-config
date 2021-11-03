import type { RuleConfig } from '../../rule-config';

/**
 * Enforce `require("dns").promises`.
 *
 * @see [prefer-promises/dns](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/dns.md)
 */
export type PreferPromisesDnsRuleConfig = RuleConfig<[]>;

/**
 * Enforce `require("dns").promises`.
 *
 * @see [prefer-promises/dns](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/dns.md)
 */
export interface PreferPromisesDnsRule {
  /**
   * Enforce `require("dns").promises`.
   *
   * @see [prefer-promises/dns](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-promises/dns.md)
   */
  'node/prefer-promises/dns': PreferPromisesDnsRuleConfig;
}
