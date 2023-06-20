import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireParamDescriptionOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  defaultDestructuredRootDescription?: string;
  setDefaultDestructuredRootDescription?: boolean;
}

/**
 * Options.
 */
export type RequireParamDescriptionOptions = [RequireParamDescriptionOption?];

/**
 * Requires that each `@param` tag has a `description` value.
 *
 * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header)
 */
export type RequireParamDescriptionRuleConfig =
  RuleConfig<RequireParamDescriptionOptions>;

/**
 * Requires that each `@param` tag has a `description` value.
 *
 * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header)
 */
export interface RequireParamDescriptionRule {
  /**
   * Requires that each `@param` tag has a `description` value.
   *
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-param-description': RequireParamDescriptionRuleConfig;
}
