import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUseBeforeDefineOption =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      enums?: boolean;
      variables?: boolean;
      typedefs?: boolean;
      ignoreTypeReferences?: boolean;
      allowNamedExports?: boolean;
    };

/**
 * Options.
 */
export type NoUseBeforeDefineOptions = [NoUseBeforeDefineOption?];

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
 */
export type NoUseBeforeDefineRuleConfig = RuleConfig<NoUseBeforeDefineOptions>;

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
 */
export interface NoUseBeforeDefineRule {
  /**
   * Disallow the use of variables before they are defined.
   *
   * @see [no-use-before-define](https://typescript-eslint.io/rules/no-use-before-define)
   */
  '@typescript-eslint/no-use-before-define': NoUseBeforeDefineRuleConfig;
}
