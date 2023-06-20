import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckValuesOption {
  allowedAuthors?: string[];
  allowedLicenses?: string[] | boolean;
  licensePattern?: string;
  numericOnlyVariation?: boolean;
}

/**
 * Options.
 */
export type CheckValuesOptions = [CheckValuesOption?];

/**
 * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
 *
 * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header)
 */
export type CheckValuesRuleConfig = RuleConfig<CheckValuesOptions>;

/**
 * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
 *
 * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header)
 */
export interface CheckValuesRule {
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   *
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header)
   */
  'jsdoc/check-values': CheckValuesRuleConfig;
}
