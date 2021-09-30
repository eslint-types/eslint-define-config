import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent line breaks after opening and before closing braces
 *
 * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
 */
export type ObjectCurlyNewlineRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent line breaks after opening and before closing braces
 *
 * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
 */
export interface ObjectCurlyNewlineRule {
  /**
   * enforce consistent line breaks after opening and before closing braces
   *
   * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
   */
  'vue/object-curly-newline': ObjectCurlyNewlineRuleConfig;
}
