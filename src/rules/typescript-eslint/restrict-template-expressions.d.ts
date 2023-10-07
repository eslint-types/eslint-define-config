import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RestrictTemplateExpressionsOption {
  /**
   * Whether to allow `any` typed values in template expressions.
   */
  allowAny?: boolean;
  /**
   * Whether to allow `boolean` typed values in template expressions.
   */
  allowBoolean?: boolean;
  /**
   * Whether to allow `nullish` typed values in template expressions.
   */
  allowNullish?: boolean;
  /**
   * Whether to allow `number` typed values in template expressions.
   */
  allowNumber?: boolean;
  /**
   * Whether to allow `regexp` typed values in template expressions.
   */
  allowRegExp?: boolean;
  /**
   * Whether to allow `never` typed values in template expressions.
   */
  allowNever?: boolean;
}

/**
 * Options.
 */
export type RestrictTemplateExpressionsOptions = [
  RestrictTemplateExpressionsOption?,
];

/**
 * Enforce template literal expressions to be of `string` type.
 *
 * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
 */
export type RestrictTemplateExpressionsRuleConfig =
  RuleConfig<RestrictTemplateExpressionsOptions>;

/**
 * Enforce template literal expressions to be of `string` type.
 *
 * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
 */
export interface RestrictTemplateExpressionsRule {
  /**
   * Enforce template literal expressions to be of `string` type.
   *
   * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
   */
  '@typescript-eslint/restrict-template-expressions': RestrictTemplateExpressionsRuleConfig;
}
