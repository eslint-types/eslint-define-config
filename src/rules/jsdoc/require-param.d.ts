import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireParamOption = {
  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  autoIncrementBase?: number;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkConstructors?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkDestructured?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkDestructuredRoots?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkGetters?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkRestProperty?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkSetters?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  checkTypesPattern?: string;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  contexts?: any[];

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableFixer?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableRestElementFixer?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  enableRootFixer?: boolean;

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  exemptedBy?: any[];

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  unnamedRootBase?: any[];

  /**
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param)
   */
  useDefaultObjectProperties?: boolean;
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
