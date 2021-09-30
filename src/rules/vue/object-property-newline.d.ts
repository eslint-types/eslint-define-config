import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectPropertyNewlineOption = {
  /**
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  allowAllPropertiesOnSameLine?: boolean;

  /**
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  allowMultiplePropertiesPerLine?: boolean;
};

/**
 * Options.
 */
export type ObjectPropertyNewlineOptions = [ObjectPropertyNewlineOption?];

/**
 * Enforce placing object properties on separate lines
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export type ObjectPropertyNewlineRuleConfig = RuleConfig<ObjectPropertyNewlineOptions>;

/**
 * Enforce placing object properties on separate lines
 *
 * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
 */
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines
   *
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  'vue/object-property-newline': ObjectPropertyNewlineRuleConfig;
}
