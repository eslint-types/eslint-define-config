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
 * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
 */
export type PreferLiteralEnumMemberRuleConfig =
  RuleConfig<PreferLiteralEnumMemberOptions>;

/**
 * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
 *
 * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
 */
export interface PreferLiteralEnumMemberRule {
  /**
   * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
   *
   * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
   */
  '@typescript-eslint/prefer-literal-enum-member': PreferLiteralEnumMemberRuleConfig;
}
