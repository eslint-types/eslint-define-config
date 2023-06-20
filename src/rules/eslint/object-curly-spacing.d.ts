import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ObjectCurlySpacingConfig {
  arraysInObjects?: boolean;
  objectsInObjects?: boolean;
}

/**
 * Option.
 */
export type ObjectCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ObjectCurlySpacingOptions = [
  ObjectCurlySpacingOption?,
  ObjectCurlySpacingConfig?,
];

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
 */
export type ObjectCurlySpacingRuleConfig =
  RuleConfig<ObjectCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
 */
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
   */
  'object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
