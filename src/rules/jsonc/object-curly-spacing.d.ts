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
 * @see [object-curly-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)
 */
export type ObjectCurlySpacingRuleConfig =
  RuleConfig<ObjectCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [object-curly-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)
 */
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)
   */
  'jsonc/object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
