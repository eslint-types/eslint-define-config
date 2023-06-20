import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type OneVarDeclarationPerLineOption = 'always' | 'initializations';

/**
 * Options.
 */
export type OneVarDeclarationPerLineOptions = [OneVarDeclarationPerLineOption?];

/**
 * Require or disallow newlines around variable declarations.
 *
 * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
 */
export type OneVarDeclarationPerLineRuleConfig =
  RuleConfig<OneVarDeclarationPerLineOptions>;

/**
 * Require or disallow newlines around variable declarations.
 *
 * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
 */
export interface OneVarDeclarationPerLineRule {
  /**
   * Require or disallow newlines around variable declarations.
   *
   * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
   */
  'one-var-declaration-per-line': OneVarDeclarationPerLineRuleConfig;
}
