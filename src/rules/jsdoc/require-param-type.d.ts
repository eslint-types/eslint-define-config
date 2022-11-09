import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireParamTypeOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  defaultDestructuredRootType?: string;
  setDefaultDestructuredRootType?: boolean;
}

/**
 * Options.
 */
export type RequireParamTypeOptions = [RequireParamTypeOption?];

/**
 * Requires that each `@param` tag has a `type` value.
 *
 * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type)
 */
export type RequireParamTypeRuleConfig = RuleConfig<RequireParamTypeOptions>;

/**
 * Requires that each `@param` tag has a `type` value.
 *
 * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type)
 */
export interface RequireParamTypeRule {
  /**
   * Requires that each `@param` tag has a `type` value.
   *
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type)
   */
  'jsdoc/require-param-type': RequireParamTypeRuleConfig;
}
