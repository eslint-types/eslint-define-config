import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CurlyOption =
  | []
  | ['all']
  | []
  | ['multi' | 'multi-line' | 'multi-or-nest']
  | ['multi' | 'multi-line' | 'multi-or-nest', 'consistent'];

/**
 * Options.
 */
export type CurlyOptions = CurlyOption;

/**
 * Enforce consistent brace style for all control statements.
 *
 * @see [curly](https://eslint.org/docs/rules/curly)
 */
export type CurlyRuleConfig = RuleConfig<CurlyOptions>;

/**
 * Enforce consistent brace style for all control statements.
 *
 * @see [curly](https://eslint.org/docs/rules/curly)
 */
export interface CurlyRule {
  /**
   * Enforce consistent brace style for all control statements.
   *
   * @see [curly](https://eslint.org/docs/rules/curly)
   */
  curly: CurlyRuleConfig;
}
