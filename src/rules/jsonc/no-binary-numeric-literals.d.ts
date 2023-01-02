import type { RuleConfig } from '../rule-config';

/**
 * Disallow binary numeric literals.
 *
 * @see [no-binary-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)
 */
export type NoBinaryNumericLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow binary numeric literals.
 *
 * @see [no-binary-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)
 */
export interface NoBinaryNumericLiteralsRule {
  /**
   * Disallow binary numeric literals.
   *
   * @see [no-binary-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)
   */
  'jsonc/no-binary-numeric-literals': NoBinaryNumericLiteralsRuleConfig;
}
