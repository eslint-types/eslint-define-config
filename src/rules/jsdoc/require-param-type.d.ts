import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireParamTypeOption = {
  /**
   * Set this to an array of strings representing the AST context where you wish the rule to be applied.
   *
   * Set to `"any"` if you want the rule to apply to any jsdoc block throughout your files (as is necessary for finding function blocks not attached to a function declaration or expression, i.e., `@callback` or `@function` (or its aliases `@func` or `@method`) (including those associated with an `@interface`).
   *
   * See the ["AST and Selectors"](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-advanced-ast-and-selectors) section of our README for more on the expected format.
   *
   * @see [contexts](https://github.com/gajus/eslint-plugin-jsdoc#contexts-8)
   */
  contexts?: string[];
};

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
