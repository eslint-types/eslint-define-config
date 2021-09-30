import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectCurlyNewlineOption = any;

/**
 * Options.
 */
export type ObjectCurlyNewlineOptions = [ObjectCurlyNewlineOption?];

/**
 * Enforce consistent line breaks after opening and before closing braces
 *
 * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
 */
export type ObjectCurlyNewlineRuleConfig = RuleConfig<ObjectCurlyNewlineOptions>;

/**
 * Enforce consistent line breaks after opening and before closing braces
 *
 * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
 */
export interface ObjectCurlyNewlineRule {
  /**
   * Enforce consistent line breaks after opening and before closing braces
   *
   * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
   */
  'vue/object-curly-newline': ObjectCurlyNewlineRuleConfig;
}
