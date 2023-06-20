import type { RuleConfig } from '../rule-config';

/**
 * Disallow `\8` and `\9` escape sequences in string literals.
 *
 * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
 */
export type NoNonoctalDecimalEscapeRuleConfig = RuleConfig<[]>;

/**
 * Disallow `\8` and `\9` escape sequences in string literals.
 *
 * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
 */
export interface NoNonoctalDecimalEscapeRule {
  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   *
   * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
   */
  'no-nonoctal-decimal-escape': NoNonoctalDecimalEscapeRuleConfig;
}
