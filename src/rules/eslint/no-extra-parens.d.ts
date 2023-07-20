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
        ternaryOperandBinaryExpressions?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
        enforceForSequenceExpressions?: boolean;
        enforceForNewInMemberExpressions?: boolean;
        enforceForFunctionPrototypeMethods?: boolean;
        allowParensAfterCommentPattern?: string;
      },
    ];

/**
 * Options.
 */
export type NoExtraParensOptions = NoExtraParensOption;

/**
 * Disallow unnecessary parentheses.
 *
 * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
 */
export type NoExtraParensRuleConfig = RuleConfig<NoExtraParensOptions>;

/**
 * Disallow unnecessary parentheses.
 *
 * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
 */
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses.
   *
   * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
   */
  'no-extra-parens': NoExtraParensRuleConfig;
}
