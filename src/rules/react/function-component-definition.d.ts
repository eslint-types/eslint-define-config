import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface FunctionComponentDefinitionOption {
  namedComponents?:
    | ('function-declaration' | 'arrow-function' | 'function-expression')
    | ('function-declaration' | 'arrow-function' | 'function-expression')[];
  unnamedComponents?:
    | ('arrow-function' | 'function-expression')
    | ('arrow-function' | 'function-expression')[];
  [k: string]: any;
}

/**
 * Options.
 */
export type FunctionComponentDefinitionOptions = [
  FunctionComponentDefinitionOption?,
];

/**
 * Enforce a specific function type for function components.
 *
 * @see [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)
 */
export type FunctionComponentDefinitionRuleConfig =
  RuleConfig<FunctionComponentDefinitionOptions>;

/**
 * Enforce a specific function type for function components.
 *
 * @see [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)
 */
export interface FunctionComponentDefinitionRule {
  /**
   * Enforce a specific function type for function components.
   *
   * @see [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)
   */
  'react/function-component-definition': FunctionComponentDefinitionRuleConfig;
}
