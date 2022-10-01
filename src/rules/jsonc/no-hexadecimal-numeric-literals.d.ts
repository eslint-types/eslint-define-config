import type { RuleConfig } from '../rule-config';

/**
 * Disallow hexadecimal numeric literals.
 *
 * @see [no-hexadecimal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)
 */
export type NoHexadecimalNumericLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow hexadecimal numeric literals.
 *
 * @see [no-hexadecimal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)
 */
export interface NoHexadecimalNumericLiteralsRule {
  /**
   * Disallow hexadecimal numeric literals.
   *
   * @see [no-hexadecimal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)
   */
  'jsonc/no-hexadecimal-numeric-literals': NoHexadecimalNumericLiteralsRuleConfig;
}
