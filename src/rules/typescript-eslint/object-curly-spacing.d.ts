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
export type ObjectCurlySpacingOptions = [ObjectCurlySpacingOption?, ObjectCurlySpacingConfig?];

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [object-curly-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/object-curly-spacing.md)
 */
export type ObjectCurlySpacingRuleConfig = RuleConfig<ObjectCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [object-curly-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/object-curly-spacing.md)
 */
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [object-curly-spacing](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/object-curly-spacing.md)
   */
  '@typescript-eslint/object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
