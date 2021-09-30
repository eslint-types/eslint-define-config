import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckParamNamesOption = {
  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  allowExtraTrailingParamDocs?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkDestructured?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkRestProperty?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkTypesPattern?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  disableExtraPropertyReporting?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  enableFixer?: any;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  useDefaultObjectProperties?: any;
};

/**
 * Options.
 */
export type CheckParamNamesOptions = [CheckParamNamesOption?];

/**
 * Ensures that parameter names in JSDoc match those in the function declaration.
 *
 * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
 */
export type CheckParamNamesRuleConfig = RuleConfig<CheckParamNamesOptions>;

/**
 * Ensures that parameter names in JSDoc match those in the function declaration.
 *
 * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
 */
export interface CheckParamNamesRule {
  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   *
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  'jsdoc/check-param-names': CheckParamNamesRuleConfig;
}
