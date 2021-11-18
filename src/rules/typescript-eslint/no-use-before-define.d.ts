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
    };

/**
 * Options.
 */
export type NoUseBeforeDefineOptions = [NoUseBeforeDefineOption?];

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-use-before-define.md)
 */
export type NoUseBeforeDefineRuleConfig = RuleConfig<NoUseBeforeDefineOptions>;

/**
 * Disallow the use of variables before they are defined.
 *
 * @see [no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-use-before-define.md)
 */
export interface NoUseBeforeDefineRule {
  /**
   * Disallow the use of variables before they are defined.
   *
   * @see [no-use-before-define](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-use-before-define.md)
   */
  '@typescript-eslint/no-use-before-define': NoUseBeforeDefineRuleConfig;
}
