import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckValuesOption = {
  allowedAuthors?: string[];
  allowedLicenses?: any;
  licensePattern?: string;
  numericOnlyVariation?: boolean;
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
