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
 * @see [object-property-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)
 */
export type ObjectPropertyNewlineRuleConfig =
  RuleConfig<ObjectPropertyNewlineOptions>;

/**
 * Enforce placing object properties on separate lines.
 *
 * @see [object-property-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)
 */
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines.
   *
   * @see [object-property-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)
   */
  'jsonc/object-property-newline': ObjectPropertyNewlineRuleConfig;
}
