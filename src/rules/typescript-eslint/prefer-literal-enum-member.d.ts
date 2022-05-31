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
 * Require all enum members to be literal values.
 *
 * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
 */
export type PreferLiteralEnumMemberRuleConfig =
  RuleConfig<PreferLiteralEnumMemberOptions>;

/**
 * Require all enum members to be literal values.
 *
 * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
 */
export interface PreferLiteralEnumMemberRule {
  /**
   * Require all enum members to be literal values.
   *
   * @see [prefer-literal-enum-member](https://typescript-eslint.io/rules/prefer-literal-enum-member)
   */
  '@typescript-eslint/prefer-literal-enum-member': PreferLiteralEnumMemberRuleConfig;
}
