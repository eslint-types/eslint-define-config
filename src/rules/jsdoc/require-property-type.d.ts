import type { RuleConfig } from '../rule-config';

/**
 * Requires that each `@property` tag has a `type` value.
 *
 * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
 */
export type RequirePropertyTypeRuleConfig = RuleConfig<[]>;

/**
 * Requires that each `@property` tag has a `type` value.
 *
 * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
 */
export interface RequirePropertyTypeRule {
  /**
   * Requires that each `@property` tag has a `type` value.
   *
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
   */
  'jsdoc/require-property-type': RequirePropertyTypeRuleConfig;
}
