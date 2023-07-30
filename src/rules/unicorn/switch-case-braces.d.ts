import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SwitchCaseBracesOption = 'always' | 'avoid';

/**
 * Options.
 */
export type SwitchCaseBracesOptions = [SwitchCaseBracesOption?];

/**
 * Enforce consistent brace style for `case` clauses.
 *
 * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/switch-case-braces.md)
 */
export type SwitchCaseBracesRuleConfig = RuleConfig<SwitchCaseBracesOptions>;

/**
 * Enforce consistent brace style for `case` clauses.
 *
 * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/switch-case-braces.md)
 */
export interface SwitchCaseBracesRule {
  /**
   * Enforce consistent brace style for `case` clauses.
   *
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': SwitchCaseBracesRuleConfig;
}
