import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireReturnsTypeOption = {
  /**
   * Set this to an array of strings representing the AST context where you wish the rule to be applied.
   *
   * Set to `"any"` if you want the rule to apply to any jsdoc block throughout your files (as is necessary for finding function blocks not attached to a function declaration or expression, i.e., `@callback` or `@function` (or its aliases `@func` or `@method`) (including those associated with an `@interface`).
   *
   * See the ["AST and Selectors"](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-advanced-ast-and-selectors) section of our README for more on the expected format.
   *
   * @see [contexts](https://github.com/gajus/eslint-plugin-jsdoc#contexts-3)
   */
  contexts?: string[];
};

/**
 * Options.
 */
export type RequireReturnsTypeOptions = [RequireReturnsTypeOption?];

/**
 * Requires that `@returns` tag has `type` value.
 *
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
 */
export type RequireReturnsTypeRuleConfig = RuleConfig<RequireReturnsTypeOptions>;

/**
 * Requires that `@returns` tag has `type` value.
 *
 * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
 */
export interface RequireReturnsTypeRule {
  /**
   * Requires that `@returns` tag has `type` value.
   *
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type)
   */
  'jsdoc/require-returns-type': RequireReturnsTypeRuleConfig;
}
