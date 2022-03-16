import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PaddingType = 'any' | 'never' | 'always';
export type StatementType =
  | (
      | '*'
      | 'block-like'
      | 'exports'
      | 'require'
      | 'directive'
      | 'expression'
      | 'iife'
      | 'multiline-block-like'
      | 'multiline-expression'
      | 'multiline-const'
      | 'multiline-let'
      | 'multiline-var'
      | 'singleline-const'
      | 'singleline-let'
      | 'singleline-var'
      | 'block'
      | 'empty'
      | 'function'
      | 'break'
      | 'case'
      | 'class'
      | 'const'
      | 'continue'
      | 'debugger'
      | 'default'
      | 'do'
      | 'export'
      | 'for'
      | 'if'
      | 'import'
      | 'let'
      | 'return'
      | 'switch'
      | 'throw'
      | 'try'
      | 'var'
      | 'while'
      | 'with'
      | 'interface'
      | 'type'
    )
  | [
      (
        | '*'
        | 'block-like'
        | 'exports'
        | 'require'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
        | 'interface'
        | 'type'
      ),
      ...(
        | '*'
        | 'block-like'
        | 'exports'
        | 'require'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
        | 'interface'
        | 'type'
      )[],
    ];
export type PaddingLineBetweenStatementsOption = {
  blankLine: PaddingType;
  prev: StatementType;
  next: StatementType;
}[];

/**
 * Options.
 */
export type PaddingLineBetweenStatementsOptions =
  PaddingLineBetweenStatementsOption;

/**
 * Require or disallow padding lines between statements.
 *
 * @see [padding-line-between-statements](https://typescript-eslint.io/rules/padding-line-between-statements)
 */
export type PaddingLineBetweenStatementsRuleConfig =
  RuleConfig<PaddingLineBetweenStatementsOptions>;

/**
 * Require or disallow padding lines between statements.
 *
 * @see [padding-line-between-statements](https://typescript-eslint.io/rules/padding-line-between-statements)
 */
export interface PaddingLineBetweenStatementsRule {
  /**
   * Require or disallow padding lines between statements.
   *
   * @see [padding-line-between-statements](https://typescript-eslint.io/rules/padding-line-between-statements)
   */
  '@typescript-eslint/padding-line-between-statements': PaddingLineBetweenStatementsRuleConfig;
}
