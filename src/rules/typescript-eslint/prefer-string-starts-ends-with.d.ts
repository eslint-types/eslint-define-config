import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
 */
export type PreferStringStartsEndsWithRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
 */
export interface PreferStringStartsEndsWithRule {
  /**
   * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
   *
   * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
   */
  '@typescript-eslint/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleConfig;
}
