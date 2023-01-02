import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface IndentConfig {
  SwitchCase?: number;
  VariableDeclarator?:
    | (number | ('first' | 'off'))
    | {
        var?: number | ('first' | 'off');
        let?: number | ('first' | 'off');
        const?: number | ('first' | 'off');
      };
  outerIIFEBody?: number | 'off';
  MemberExpression?: number | 'off';
  FunctionDeclaration?: {
    parameters?: number | ('first' | 'off');
    body?: number;
  };
  FunctionExpression?: {
    parameters?: number | ('first' | 'off');
    body?: number;
  };
  StaticBlock?: {
    body?: number;
  };
  CallExpression?: {
    arguments?: number | ('first' | 'off');
  };
  ArrayExpression?: number | ('first' | 'off');
  ObjectExpression?: number | ('first' | 'off');
  ImportDeclaration?: number | ('first' | 'off');
  flatTernaryExpressions?: boolean;
  offsetTernaryExpressions?: boolean;
  ignoredNodes?: string[];
  ignoreComments?: boolean;
}

/**
 * Option.
 */
export type IndentOption = 'tab' | number;

/**
 * Options.
 */
export type IndentOptions = [IndentOption?, IndentConfig?];

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)
 */
export type IndentRuleConfig = RuleConfig<IndentOptions>;

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)
 */
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)
   */
  'jsonc/indent': IndentRuleConfig;
}
