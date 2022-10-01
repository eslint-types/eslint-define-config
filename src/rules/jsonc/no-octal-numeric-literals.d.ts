import type { RuleConfig } from '../rule-config';

/**
 * Disallow octal numeric literals.
 *
 * @see [no-octal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)
 */
export type NoOctalNumericLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow octal numeric literals.
 *
 * @see [no-octal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)
 */
export interface NoOctalNumericLiteralsRule {
  /**
   * Disallow octal numeric literals.
   *
   * @see [no-octal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)
   */
  'jsonc/no-octal-numeric-literals': NoOctalNumericLiteralsRuleConfig;
}
