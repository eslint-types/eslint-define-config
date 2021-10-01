import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireParamOption {
  autoIncrementBase?: number;
  checkConstructors?: boolean;
  checkDestructured?: boolean;
  checkDestructuredRoots?: boolean;
  checkGetters?: boolean;
  checkRestProperty?: boolean;
  checkSetters?: boolean;
  checkTypesPattern?: string;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  enableFixer?: boolean;
  enableRestElementFixer?: boolean;
  enableRootFixer?: boolean;
  exemptedBy?: string[];
  unnamedRootBase?: string[];
  useDefaultObjectProperties?: boolean;
}

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
