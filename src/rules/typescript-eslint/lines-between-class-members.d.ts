import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface LinesBetweenClassMembersConfig {
  exceptAfterSingleLine?: boolean;
  exceptAfterOverload?: boolean;
}

/**
 * Option.
 */
export type LinesBetweenClassMembersOption =
  | {
      /**
       * @minItems 1
       */
      enforce: [
        {
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        },
        ...{
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        }[],
      ];
    }
  | ('always' | 'never');

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
 * @see [lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)
 */
export type LinesBetweenClassMembersRuleConfig =
  RuleConfig<LinesBetweenClassMembersOptions>;

/**
 * Require or disallow an empty line between class members.
 *
 * @see [lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)
 */
export interface LinesBetweenClassMembersRule {
  /**
   * Require or disallow an empty line between class members.
   *
   * @see [lines-between-class-members](https://typescript-eslint.io/rules/lines-between-class-members)
   */
  '@typescript-eslint/lines-between-class-members': LinesBetweenClassMembersRuleConfig;
}
