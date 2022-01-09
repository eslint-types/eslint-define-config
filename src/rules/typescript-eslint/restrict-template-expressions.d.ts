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
export type RestrictTemplateExpressionsOptions = [
  RestrictTemplateExpressionsOption?,
];

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
 */
export type RestrictTemplateExpressionsRuleConfig =
  RuleConfig<RestrictTemplateExpressionsOptions>;

/**
 * Enforce template literal expressions to be of string type.
 *
 * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
 */
export interface RestrictTemplateExpressionsRule {
  /**
   * Enforce template literal expressions to be of string type.
   *
   * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
   */
  '@typescript-eslint/restrict-template-expressions': RestrictTemplateExpressionsRuleConfig;
}
