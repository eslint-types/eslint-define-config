import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface LinesBetweenClassMembersOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type LinesBetweenClassMembersOptions = [LinesBetweenClassMembersOption?];

/**
 * Require or disallow an empty line between class members.
 *
 * @see [lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/lines-between-class-members.md)
 */
export type LinesBetweenClassMembersRuleConfig = RuleConfig<LinesBetweenClassMembersOptions>;

/**
 * Require or disallow an empty line between class members.
 *
 * @see [lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/lines-between-class-members.md)
 */
export interface LinesBetweenClassMembersRule {
  /**
   * Require or disallow an empty line between class members.
   *
   * @see [lines-between-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/lines-between-class-members.md)
   */
  '@typescript-eslint/lines-between-class-members': LinesBetweenClassMembersRuleConfig;
}
