import type { RuleConfig } from '../rule-config';

/**
 * Requires that each `@property` tag has a `description` value.
 *
 * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
 */
export type RequirePropertyDescriptionRuleConfig = RuleConfig<[]>;

/**
 * Requires that each `@property` tag has a `description` value.
 *
 * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
 */
export interface RequirePropertyDescriptionRule {
  /**
   * Requires that each `@property` tag has a `description` value.
   *
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
   */
  'jsdoc/require-property-description': RequirePropertyDescriptionRuleConfig;
}
