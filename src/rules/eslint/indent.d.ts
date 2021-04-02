import type { RuleConfig } from '../rule-config';

/**
 * Indent Config.
 */
export interface IndentConfig {
  /**
   * @see [ignoredNodes](https://eslint.org/docs/rules/indent#ignorednodes)
   */
  ignoredNodes?: string[];
  /**
   * @see [SwitchCase](https://eslint.org/docs/rules/indent#switchcase)
   */
  SwitchCase?: number;
  /**
   * @see [VariableDeclarator](https://eslint.org/docs/rules/indent#variabledeclarator)
   */
  VariableDeclarator?: number | 'first' | { var?: number; let?: number; const?: number };
  /**
   * @see [outerIIFEBody](https://eslint.org/docs/rules/indent#outeriifebody)
   */
  outerIIFEBody?: number | 'off';
  /**
   * @see [MemberExpression](https://eslint.org/docs/rules/indent#memberexpression)
   */
  MemberExpression?: number;
  /**
   * @see [FunctionDeclaration](https://eslint.org/docs/rules/indent#functiondeclaration)
   */
  FunctionDeclaration?: { body?: number; parameters?: number | 'first' };
  /**
   * @see [CallExpression](https://eslint.org/docs/rules/indent#callexpression)
   */
  CallExpression?: { arguments?: number | 'first' };
  /**
   * @see [ArrayExpression](https://eslint.org/docs/rules/indent#arrayexpression)
   */
  ArrayExpression?: number | 'first';
  /**
   * @see [ObjectExpression](https://eslint.org/docs/rules/indent#objectexpression)
   */
  ObjectExpression?: number | 'first';
  /**
   * @see [ImportDeclaration](https://eslint.org/docs/rules/indent#importdeclaration)
   */
  ImportDeclaration?: number | 'first';
  /**
   * @see [flatTernaryExpressions](https://eslint.org/docs/rules/indent#flatternaryexpressions)
   */
  flatTernaryExpressions?: boolean;
  /**
   * @see [offsetTernaryExpressions](https://eslint.org/docs/rules/indent#offsetternaryexpressions)
   */
  offsetTernaryExpressions?: boolean;
  /**
   * @see [ignoreComments](https://eslint.org/docs/rules/indent#ignorecomments)
   */
  ignoreComments?: boolean;
}

/**
 * Option.
 */
export type IndentOption = number | 'tab';

/**
 * Options.
 */
export type IndentOptions = [IndentOption?, IndentConfig?];

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://eslint.org/docs/rules/indent)
 */
export type IndentRuleConfig = RuleConfig<IndentOptions>;

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://eslint.org/docs/rules/indent)
 */
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://eslint.org/docs/rules/indent)
   */
  indent: IndentRuleConfig;
}
