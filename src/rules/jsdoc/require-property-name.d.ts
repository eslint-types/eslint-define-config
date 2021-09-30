import type { RuleConfig } from '../rule-config';

/**
 * Requires that all function `@property` tags have names.
 *
 * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name)
 */
export type RequirePropertyNameRuleConfig = RuleConfig<[]>;

/**
 * Requires that all function `@property` tags have names.
 *
 * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name)
 */
export interface RequirePropertyNameRule {
  /**
   * Requires that all function `@property` tags have names.
   *
   * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-property-name)
   */
  'jsdoc/require-property-name': RequirePropertyNameRuleConfig;
}
