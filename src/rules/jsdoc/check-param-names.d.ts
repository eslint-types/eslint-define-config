import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckParamNamesOption {
  allowExtraTrailingParamDocs?: boolean;
  checkDestructured?: boolean;
  checkRestProperty?: boolean;
  checkTypesPattern?: string;
  disableExtraPropertyReporting?: boolean;
  enableFixer?: boolean;
  useDefaultObjectProperties?: boolean;
}

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
