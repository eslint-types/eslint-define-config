import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ObjectPropertyNewlineOption {
  allowAllPropertiesOnSameLine?: boolean;
  allowMultiplePropertiesPerLine?: boolean;
}

/**
 * Options.
 */
export type ObjectPropertyNewlineOptions = [ObjectPropertyNewlineOption?];

/**
 * Enforce placing object properties on separate lines.
 *
 * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
 */
export type ObjectPropertyNewlineRuleConfig =
  RuleConfig<ObjectPropertyNewlineOptions>;

/**
 * Enforce placing object properties on separate lines.
 *
 * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
 */
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines.
   *
   * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
   */
  'object-property-newline': ObjectPropertyNewlineRuleConfig;
}
