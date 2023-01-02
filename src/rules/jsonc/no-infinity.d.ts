import type { RuleConfig } from '../rule-config';

/**
 * Disallow Infinity.
 *
 * @see [no-infinity](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)
 */
export type NoInfinityRuleConfig = RuleConfig<[]>;

/**
 * Disallow Infinity.
 *
 * @see [no-infinity](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)
 */
export interface NoInfinityRule {
  /**
   * Disallow Infinity.
   *
   * @see [no-infinity](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)
   */
  'jsonc/no-infinity': NoInfinityRuleConfig;
}
