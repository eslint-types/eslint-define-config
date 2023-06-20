import type { RuleConfig } from '../rule-config';

/**
 * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
 *
 * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
 */
export type RequirePropertyRuleConfig = RuleConfig<[]>;

/**
 * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
 *
 * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
 */
export interface RequirePropertyRule {
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   *
   * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
   */
  'jsdoc/require-property': RequirePropertyRuleConfig;
}
