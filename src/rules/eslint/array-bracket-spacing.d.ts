import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ArrayBracketSpacingConfig {
  singleValue?: boolean;
  objectsInArrays?: boolean;
  arraysInArrays?: boolean;
}

/**
 * Option.
 */
export type ArrayBracketSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ArrayBracketSpacingOptions = [
  ArrayBracketSpacingOption?,
  ArrayBracketSpacingConfig?,
];

/**
 * Enforce consistent spacing inside array brackets.
 *
 * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
 */
export type ArrayBracketSpacingRuleConfig =
  RuleConfig<ArrayBracketSpacingOptions>;

/**
 * Enforce consistent spacing inside array brackets.
 *
 * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
 */
export interface ArrayBracketSpacingRule {
  /**
   * Enforce consistent spacing inside array brackets.
   *
   * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
   */
  'array-bracket-spacing': ArrayBracketSpacingRuleConfig;
}
