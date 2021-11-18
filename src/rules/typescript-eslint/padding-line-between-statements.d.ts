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
      )[]
    ];
export type PaddingLineBetweenStatementsOption = {
  blankLine: PaddingType;
  prev: StatementType;
  next: StatementType;
}[];

/**
 * Options.
 */
export type PaddingLineBetweenStatementsOptions = PaddingLineBetweenStatementsOption;

/**
 * Require or disallow padding lines between statements.
 *
 * @see [padding-line-between-statements](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)
 */
export type PaddingLineBetweenStatementsRuleConfig = RuleConfig<PaddingLineBetweenStatementsOptions>;

/**
 * Require or disallow padding lines between statements.
 *
 * @see [padding-line-between-statements](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)
 */
export interface PaddingLineBetweenStatementsRule {
  /**
   * Require or disallow padding lines between statements.
   *
   * @see [padding-line-between-statements](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/padding-line-between-statements.md)
   */
  '@typescript-eslint/padding-line-between-statements': PaddingLineBetweenStatementsRuleConfig;
}
