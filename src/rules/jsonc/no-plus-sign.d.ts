import type { RuleConfig } from '../rule-config';

/**
 * Disallow plus sign.
 *
 * @see [no-plus-sign](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)
 */
export type NoPlusSignRuleConfig = RuleConfig<[]>;

/**
 * Disallow plus sign.
 *
 * @see [no-plus-sign](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)
 */
export interface NoPlusSignRule {
  /**
   * Disallow plus sign.
   *
   * @see [no-plus-sign](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)
   */
  'jsonc/no-plus-sign': NoPlusSignRuleConfig;
}
