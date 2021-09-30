import type { RuleConfig } from '../rule-config';

/**
 * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
 *
 * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property)
 */
export type RequirePropertyRuleConfig = RuleConfig<[]>;

/**
 * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
 *
 * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property)
 */
export interface RequirePropertyRule {
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   *
   * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property)
   */
  'jsdoc/require-property': RequirePropertyRuleConfig;
}
