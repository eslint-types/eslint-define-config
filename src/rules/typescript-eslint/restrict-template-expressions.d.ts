import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RestrictTemplateExpressionsOption {
  allowNumber?: boolean;
  allowBoolean?: boolean;
  allowAny?: boolean;
  allowNullish?: boolean;
  allowRegExp?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type RestrictTemplateExpressionsOptions = [RestrictTemplateExpressionsOption?];

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
 */
export type RestrictTemplateExpressionsRuleConfig = RuleConfig<RestrictTemplateExpressionsOptions>;

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
 */
export interface RestrictTemplateExpressionsRule {
  /**
   * Enforce template literal expressions to be of string type.
   *
   * @see [restrict-template-expressions](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md)
   */
  '@typescript-eslint/restrict-template-expressions': RestrictTemplateExpressionsRuleConfig;
}
