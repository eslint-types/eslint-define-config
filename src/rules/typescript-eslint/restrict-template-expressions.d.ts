import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RestrictTemplateExpressionsOption = {
  /**
   * If `true`, also allow number type in template expressions.
   *
   * @default true
   *
   * @see [allowNumber](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md#allownumber)
   */
  allowNumber?: boolean;
  /**
   * If `true`, also allow boolean type in template expressions.
   *
   * @default false
   *
   * @see [allowBoolean](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md#allowboolean)
   */
  allowBoolean?: boolean;
  /**
   * If `true`, also allow any in template expressions.
   *
   * @default false
   *
   * @see [allowAny](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md#allowany)
   */
  allowAny?: boolean;
  /**
   * If `true`, also allow null and undefined in template expressions.
   *
   * @default false
   *
   * @see [allowNullish](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md#allownullish)
   */
  allowNullish?: boolean;
};

/**
 * Options.
 */
export type RestrictTemplateExpressionsOptions = [RestrictTemplateExpressionsOption?];

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
 */
export type RestrictTemplateExpressionsRuleConfig = RuleConfig<RestrictTemplateExpressionsOptions>;

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
 */
export interface RestrictTemplateExpressionsRule {
  /**
   * Enforce template literal expressions to be of string type.
   *
   * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
   */
  '@typescript-eslint/restrict-template-expressions': RestrictTemplateExpressionsRuleConfig;
}
