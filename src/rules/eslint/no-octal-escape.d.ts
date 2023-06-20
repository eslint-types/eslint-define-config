import type { RuleConfig } from '../rule-config';

/**
 * Disallow octal escape sequences in string literals.
 *
 * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
 */
export type NoOctalEscapeRuleConfig = RuleConfig<[]>;

/**
 * Disallow octal escape sequences in string literals.
 *
 * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
 */
export interface NoOctalEscapeRule {
  /**
   * Disallow octal escape sequences in string literals.
   *
   * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
   */
  'no-octal-escape': NoOctalEscapeRuleConfig;
}
