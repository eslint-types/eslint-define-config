import type { RuleConfig } from '../rule-config';

/** Base Config. */
export interface BaseConfig {
  multiline?: {
    /**
     * @default 'semi'
     *
     * @see [delimiter](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#delimiter)
     */
    delimiter?: 'none' | 'semi' | 'comma';
    /**
     * @default true
     *
     * @see [requireLast](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#requirelast)
     */
    requireLast?: boolean;
  };
  singleline?: {
    /**
     * @default 'semi'
     *
     * @see [delimiter](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#delimiter)
     */
    delimiter?: 'semi' | 'comma';
    /**
     * @default false
     *
     * @see [requireLast](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#requirelast)
     */
    requireLast?: boolean;
  };
}

/**
 * Option.
 */
export type MemberDelimiterStyleOption = BaseConfig & {
  /**
   * Allows you to specify options specifically for either `interfaces` or `type` definitions / inline `type`s.
   *
   * @see [overrides](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#overrides)
   */
  overrides?: {
    interface?: BaseConfig;
    typeLiteral?: BaseConfig;
  };
  /**
   * @default 'brackets'
   *
   * @see [multilineDetection](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md#options)
   */
  multilineDetection?: 'brackets' | 'last-member';
};

/**
 * Options.
 */
export type MemberDelimiterStyleOptions = [MemberDelimiterStyleOption?];

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
 */
export type MemberDelimiterStyleRuleConfig = RuleConfig<MemberDelimiterStyleOptions>;

/**
 * Require a specific member delimiter style for interfaces and type literals.
 *
 * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
 */
export interface MemberDelimiterStyleRule {
  /**
   * Require a specific member delimiter style for interfaces and type literals.
   *
   * @see [member-delimiter-style](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md)
   */
  '@typescript-eslint/member-delimiter-style': MemberDelimiterStyleRuleConfig;
}
