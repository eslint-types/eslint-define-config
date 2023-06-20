import type { RuleConfig } from '../rule-config';

/**
 * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
 *
 * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
 */
export type PreferNumericLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
 *
 * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
 */
export interface PreferNumericLiteralsRule {
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
   *
   * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
   */
  'prefer-numeric-literals': PreferNumericLiteralsRuleConfig;
}
