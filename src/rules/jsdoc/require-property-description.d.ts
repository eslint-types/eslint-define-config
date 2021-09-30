import type { RuleConfig } from '../rule-config';

/**
 * Requires that each `@property` tag has a `description` value.
 *
 * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description)
 */
export type RequirePropertyDescriptionRuleConfig = RuleConfig<[]>;

/**
 * Requires that each `@property` tag has a `description` value.
 *
 * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description)
 */
export interface RequirePropertyDescriptionRule {
  /**
   * Requires that each `@property` tag has a `description` value.
   *
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-description)
   */
  'jsdoc/require-property-description': RequirePropertyDescriptionRuleConfig;
}
