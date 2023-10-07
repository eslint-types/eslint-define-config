import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MultiLineOption = 'none' | 'semi' | 'comma';
export type SingleLineOption = 'semi' | 'comma';

export interface MemberDelimiterStyleOption {
  multiline?: {
    delimiter?: MultiLineOption;
    requireLast?: boolean;
  };
  singleline?: {
    delimiter?: SingleLineOption;
    requireLast?: boolean;
  };
  overrides?: {
    interface?: DelimiterConfig;
    typeLiteral?: DelimiterConfig;
  };
  multilineDetection?: 'brackets' | 'last-member';
}
export interface DelimiterConfig {
  multiline?: {
    delimiter?: MultiLineOption;
    requireLast?: boolean;
  };
  singleline?: {
    delimiter?: SingleLineOption;
    requireLast?: boolean;
  };
}

/**
 * Options.
 */
export type MemberDelimiterStyleOptions = [MemberDelimiterStyleOption?];

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)
 */
export type MemberDelimiterStyleRuleConfig =
  RuleConfig<MemberDelimiterStyleOptions>;

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)
 */
export interface MemberDelimiterStyleRule {
  /**
   * Require a specific member delimiter style for interfaces and type literals.
   *
   * @see [member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)
   */
  '@typescript-eslint/member-delimiter-style': MemberDelimiterStyleRuleConfig;
}
