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
 * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
 */
export type RequireParamTypeRuleConfig = RuleConfig<RequireParamTypeOptions>;

/**
 * Requires that each `@param` tag has a `type` value.
 *
 * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
 */
export interface RequireParamTypeRule {
  /**
   * Requires that each `@param` tag has a `type` value.
   *
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
   */
  'jsdoc/require-param-type': RequireParamTypeRuleConfig;
}
