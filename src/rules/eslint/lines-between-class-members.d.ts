import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface LinesBetweenClassMembersConfig {
  exceptAfterSingleLine?: boolean;
}

/**
 * Option.
 */
export type LinesBetweenClassMembersOption = 'always' | 'never';

/**
 * Options.
 */
export type LinesBetweenClassMembersOptions = [
  LinesBetweenClassMembersOption?,
  LinesBetweenClassMembersConfig?,
];

/**
 * Require or disallow an empty line between class members.
 *
 * @see [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
 */
export type LinesBetweenClassMembersRuleConfig =
  RuleConfig<LinesBetweenClassMembersOptions>;

/**
 * Require or disallow an empty line between class members.
 *
 * @see [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
 */
export interface LinesBetweenClassMembersRule {
  /**
   * Require or disallow an empty line between class members.
   *
   * @see [lines-between-class-members](https://eslint.org/docs/rules/lines-between-class-members)
   */
  'lines-between-class-members': LinesBetweenClassMembersRuleConfig;
}
