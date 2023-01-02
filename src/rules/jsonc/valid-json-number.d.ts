import type { RuleConfig } from '../rule-config';

/**
 * Disallow invalid number for JSON.
 *
 * @see [valid-json-number](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)
 */
export type ValidJsonNumberRuleConfig = RuleConfig<[]>;

/**
 * Disallow invalid number for JSON.
 *
 * @see [valid-json-number](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)
 */
export interface ValidJsonNumberRule {
  /**
   * Disallow invalid number for JSON.
   *
   * @see [valid-json-number](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)
   */
  'jsonc/valid-json-number': ValidJsonNumberRuleConfig;
}
