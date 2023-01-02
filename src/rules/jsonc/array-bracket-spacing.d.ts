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
 * Disallow or enforce spaces inside of brackets.
 *
 * @see [array-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)
 */
export type ArrayBracketSpacingRuleConfig =
  RuleConfig<ArrayBracketSpacingOptions>;

/**
 * Disallow or enforce spaces inside of brackets.
 *
 * @see [array-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)
 */
export interface ArrayBracketSpacingRule {
  /**
   * Disallow or enforce spaces inside of brackets.
   *
   * @see [array-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)
   */
  'jsonc/array-bracket-spacing': ArrayBracketSpacingRuleConfig;
}
