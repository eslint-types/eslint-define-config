import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectPropertyNewlineOption = {
  /**
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  allowAllPropertiesOnSameLine?: any;

  /**
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  allowMultiplePropertiesPerLine?: any;
};

/**
 * Options.
 */
export type ObjectPropertyNewlineOptions = [ObjectPropertyNewlineOption?];

/**
 * enforce placing object properties on separate lines
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export type ObjectPropertyNewlineRuleConfig = RuleConfig<ObjectPropertyNewlineOptions>;

/**
 * enforce placing object properties on separate lines
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export interface ObjectPropertyNewlineRule {
  /**
   * enforce placing object properties on separate lines
   *
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  'vue/object-property-newline': ObjectPropertyNewlineRuleConfig;
}
