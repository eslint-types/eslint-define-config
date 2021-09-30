import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CheckParamNamesOption = {
  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  allowExtraTrailingParamDocs?: boolean;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkDestructured?: boolean;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkRestProperty?: boolean;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  checkTypesPattern?: string;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  disableExtraPropertyReporting?: boolean;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  enableFixer?: boolean;

  /**
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names)
   */
  useDefaultObjectProperties?: boolean;
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
