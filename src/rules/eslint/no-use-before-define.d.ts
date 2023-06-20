import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUseBeforeDefineOption =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      variables?: boolean;
      allowNamedExports?: boolean;
    };

/**
 * Options.
 */
export type NoUseBeforeDefineOptions = [NoUseBeforeDefineOption?];

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
 */
export type NoUseBeforeDefineRuleConfig = RuleConfig<NoUseBeforeDefineOptions>;

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
 */
export interface NoUseBeforeDefineRule {
  /**
   * Disallow the use of variables before they are defined.
   *
   * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
   */
  'no-use-before-define': NoUseBeforeDefineRuleConfig;
}
