import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireParamNameOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

/**
 * Options.
 */
export type RequireParamNameOptions = [RequireParamNameOption?];

/**
 * Requires that all function parameters have names.
 *
 * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name)
 */
export type RequireParamNameRuleConfig = RuleConfig<RequireParamNameOptions>;

/**
 * Requires that all function parameters have names.
 *
 * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name)
 */
export interface RequireParamNameRule {
  /**
   * Requires that all function parameters have names.
   *
   * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name)
   */
  'jsdoc/require-param-name': RequireParamNameRuleConfig;
}
