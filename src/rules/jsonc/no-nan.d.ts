import type { RuleConfig } from '../rule-config';

/**
 * Disallow NaN.
 *
 * @see [no-nan](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)
 */
export type NoNanRuleConfig = RuleConfig<[]>;

/**
 * Disallow NaN.
 *
 * @see [no-nan](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)
 */
export interface NoNanRule {
  /**
   * Disallow NaN.
   *
   * @see [no-nan](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)
   */
  'jsonc/no-nan': NoNanRuleConfig;
}
