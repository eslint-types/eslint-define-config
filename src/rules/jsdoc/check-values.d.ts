import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckValuesOption = {
  /**
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  allowedAuthors?: any;

  /**
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  allowedLicenses?: any;

  /**
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  licensePattern?: any;

  /**
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  numericOnlyVariation?: any;
};

/**
 * Options.
 */
export type CheckValuesOptions = [CheckValuesOption?];

/**
 * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
 *
 * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
 */
export type CheckValuesRuleConfig = RuleConfig<CheckValuesOptions>;

/**
 * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
 *
 * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
 */
export interface CheckValuesRule {
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   *
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values)
   */
  'jsdoc/check-values': CheckValuesRuleConfig;
}
