import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireParamOption = {
  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  autoIncrementBase?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkConstructors?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkDestructured?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkDestructuredRoots?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkGetters?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkRestProperty?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkSetters?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkTypesPattern?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  contexts?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableFixer?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableRestElementFixer?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableRootFixer?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  exemptedBy?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  unnamedRootBase?: any;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  useDefaultObjectProperties?: any;
};

/**
 * Options.
 */
export type RequireParamOptions = [RequireParamOption?];

/**
 * Requires that all function parameters are documented.
 *
 * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
 */
export type RequireParamRuleConfig = RuleConfig<RequireParamOptions>;

/**
 * Requires that all function parameters are documented.
 *
 * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
 */
export interface RequireParamRule {
  /**
   * Requires that all function parameters are documented.
   *
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  'jsdoc/require-param': RequireParamRuleConfig;
}
