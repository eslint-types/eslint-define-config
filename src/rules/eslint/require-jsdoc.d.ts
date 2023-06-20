import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireJsdocOption {
  require?: {
    ClassDeclaration?: boolean;
    MethodDefinition?: boolean;
    FunctionDeclaration?: boolean;
    ArrowFunctionExpression?: boolean;
    FunctionExpression?: boolean;
  };
}

/**
 * Options.
 */
export type RequireJsdocOptions = [RequireJsdocOption?];

/**
 * Require JSDoc comments.
 *
 * @deprecated
 *
 * @see [require-jsdoc](https://eslint.org/docs/latest/rules/require-jsdoc)
 */
export type RequireJsdocRuleConfig = RuleConfig<RequireJsdocOptions>;

/**
 * Require JSDoc comments.
 *
 * @deprecated
 *
 * @see [require-jsdoc](https://eslint.org/docs/latest/rules/require-jsdoc)
 */
export interface RequireJsdocRule {
  /**
   * Require JSDoc comments.
   *
   * @deprecated
   *
   * @see [require-jsdoc](https://eslint.org/docs/latest/rules/require-jsdoc)
   */
  'require-jsdoc': RequireJsdocRuleConfig;
}
