import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferLiteralEnumMemberOption {
  allowBitwiseExpressions?: boolean;
}

/**
 * Options.
 */
export type PreferLiteralEnumMemberOptions = [PreferLiteralEnumMemberOption?];

/**
 * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
 *
 * @see [prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)
 */
export type PreferLiteralEnumMemberRuleConfig = RuleConfig<PreferLiteralEnumMemberOptions>;

/**
 * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
 *
 * @see [prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)
 */
export interface PreferLiteralEnumMemberRule {
  /**
   * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
   *
   * @see [prefer-literal-enum-member](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md)
   */
  '@typescript-eslint/prefer-literal-enum-member': PreferLiteralEnumMemberRuleConfig;
}
