import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoElementOverwriteOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoElementOverwriteOptions = [NoElementOverwriteOption?];

/**
 * Collection elements should not be replaced unconditionally.
 *
 * @see [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
 */
export type NoElementOverwriteRuleConfig =
  RuleConfig<NoElementOverwriteOptions>;

/**
 * Collection elements should not be replaced unconditionally.
 *
 * @see [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
 */
export interface NoElementOverwriteRule {
  /**
   * Collection elements should not be replaced unconditionally.
   *
   * @see [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
   */
  'sonarjs/no-element-overwrite': NoElementOverwriteRuleConfig;
}
