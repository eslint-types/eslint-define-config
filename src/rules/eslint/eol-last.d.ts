import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type EolLastOption = 'always' | 'never' | 'unix' | 'windows';

/**
 * Options.
 */
export type EolLastOptions = [EolLastOption?];

/**
 * Require or disallow newline at the end of files.
 *
 * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
 */
export type EolLastRuleConfig = RuleConfig<EolLastOptions>;

/**
 * Require or disallow newline at the end of files.
 *
 * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
 */
export interface EolLastRule {
  /**
   * Require or disallow newline at the end of files.
   *
   * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
   */
  'eol-last': EolLastRuleConfig;
}
