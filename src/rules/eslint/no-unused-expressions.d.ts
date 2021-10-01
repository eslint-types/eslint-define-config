import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedExpressionsOption {
  /**
   * Set to `true` will allow you to use short circuit evaluations in your expressions.
   *
   * @default false
   *
   * @see [allowShortCircuit](https://eslint.org/docs/rules/no-unused-expressions#allowshortcircuit)
   */
  allowShortCircuit?: boolean;
  /**
   * Set to `true` will enable you to use ternary operators in your expressions similarly to short circuit evaluations.
   *
   * @default false
   *
   * @see [allowTernary](https://eslint.org/docs/rules/no-unused-expressions#allowternary)
   */
  allowTernary?: boolean;
  /**
   * Set to `true` will enable you to use tagged template literals in your expressions.
   *
   * @default false
   *
   * @see [allowTaggedTemplates](https://eslint.org/docs/rules/no-unused-expressions#allowtaggedtemplates)
   */
  allowTaggedTemplates?: boolean;
  /**
   * Set to `true` will flag unused JSX element expressions.
   *
   * @default false
   *
   * @see [enforceForJSX](https://eslint.org/docs/rules/no-unused-expressions#enforceforjsx)
   */
  enforceForJSX?: boolean;
}

/**
 * Options.
 */
export type NoUnusedExpressionsOptions = [NoUnusedExpressionsOption?];

/**
 * Disallow unused expressions.
 *
 * @see [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
 */
export type NoUnusedExpressionsRuleConfig = RuleConfig<NoUnusedExpressionsOptions>;

/**
 * Disallow unused expressions.
 *
 * @see [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
 */
export interface NoUnusedExpressionsRule {
  /**
   * Disallow unused expressions.
   *
   * @see [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)
   */
  'no-unused-expressions': NoUnusedExpressionsRuleConfig;
}
