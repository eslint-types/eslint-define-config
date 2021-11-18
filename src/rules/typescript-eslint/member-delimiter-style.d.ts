import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MemberDelimiterStyleOption {
  multiline?: {
    delimiter?: 'none' | 'semi' | 'comma';
    requireLast?: boolean;
  };
  singleline?: {
    delimiter?: 'semi' | 'comma';
    requireLast?: boolean;
  };
  overrides?: {
    interface?: {
      multiline?: {
        delimiter?: 'none' | 'semi' | 'comma';
        requireLast?: boolean;
      };
      singleline?: {
        delimiter?: 'semi' | 'comma';
        requireLast?: boolean;
      };
    };
    typeLiteral?: {
      multiline?: {
        delimiter?: 'none' | 'semi' | 'comma';
        requireLast?: boolean;
      };
      singleline?: {
        delimiter?: 'semi' | 'comma';
        requireLast?: boolean;
      };
    };
  };
  multilineDetection?: 'brackets' | 'last-member';
}

/**
 * Options.
 */
export type MemberDelimiterStyleOptions = [MemberDelimiterStyleOption?];

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
 */
export type MemberDelimiterStyleRuleConfig = RuleConfig<MemberDelimiterStyleOptions>;

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
 */
export interface MemberDelimiterStyleRule {
  /**
   * Require a specific member delimiter style for interfaces and type literals.
   *
   * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
   */
  '@typescript-eslint/member-delimiter-style': MemberDelimiterStyleRuleConfig;
}
