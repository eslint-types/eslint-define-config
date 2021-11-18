import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoExtraParensOption =
  | []
  | ['functions']
  | []
  | ['all']
  | [
      'all',
      {
        conditionalAssign?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
        enforceForSequenceExpressions?: boolean;
        enforceForNewInMemberExpressions?: boolean;
        enforceForFunctionPrototypeMethods?: boolean;
      }
    ];

/**
 * Options.
 */
export type NoExtraParensOptions = NoExtraParensOption;

/**
 * Disallow unnecessary parentheses.
 *
 * @see [no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-parens.md)
 */
export type NoExtraParensRuleConfig = RuleConfig<NoExtraParensOptions>;

/**
 * Disallow unnecessary parentheses.
 *
 * @see [no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-parens.md)
 */
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses.
   *
   * @see [no-extra-parens](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-extra-parens.md)
   */
  '@typescript-eslint/no-extra-parens': NoExtraParensRuleConfig;
}
