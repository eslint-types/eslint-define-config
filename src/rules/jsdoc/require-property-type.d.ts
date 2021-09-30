import type { RuleConfig } from '../rule-config';

/**
 * Requires that each `@property` tag has a `type` value.
 *
 * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type)
 */
export type RequirePropertyTypeRuleConfig = RuleConfig<[]>;

/**
 * Requires that each `@property` tag has a `type` value.
 *
 * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type)
 */
export interface RequirePropertyTypeRule {
  /**
   * Requires that each `@property` tag has a `type` value.
   *
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-type)
   */
  'jsdoc/require-property-type': RequirePropertyTypeRuleConfig;
}
