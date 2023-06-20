import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface IndentLegacyConfig {
  SwitchCase?: number;
  VariableDeclarator?:
    | number
    | {
        var?: number;
        let?: number;
        const?: number;
        [k: string]: any;
      };
  outerIIFEBody?: number;
  MemberExpression?: number;
  FunctionDeclaration?: {
    parameters?: number | 'first';
    body?: number;
    [k: string]: any;
  };
  FunctionExpression?: {
    parameters?: number | 'first';
    body?: number;
    [k: string]: any;
  };
  CallExpression?: {
    parameters?: number | 'first';
    [k: string]: any;
  };
  ArrayExpression?: number | 'first';
  ObjectExpression?: number | 'first';
}

/**
 * Option.
 */
export type IndentLegacyOption = 'tab' | number;

/**
 * Options.
 */
export type IndentLegacyOptions = [IndentLegacyOption?, IndentLegacyConfig?];

/**
 * Enforce consistent indentation.
 *
 * @deprecated
 *
 * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
 */
export type IndentLegacyRuleConfig = RuleConfig<IndentLegacyOptions>;

/**
 * Enforce consistent indentation.
 *
 * @deprecated
 *
 * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
 */
export interface IndentLegacyRule {
  /**
   * Enforce consistent indentation.
   *
   * @deprecated
   *
   * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
   */
  'indent-legacy': IndentLegacyRuleConfig;
}
