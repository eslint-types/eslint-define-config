import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferStatelessFunctionOption {
  ignorePureComponents?: boolean;
}

/**
 * Options.
 */
export type PreferStatelessFunctionOptions = [PreferStatelessFunctionOption?];

/**
 * Enforce stateless components to be written as a pure function.
 *
 * @see [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)
 */
export type PreferStatelessFunctionRuleConfig =
  RuleConfig<PreferStatelessFunctionOptions>;

/**
 * Enforce stateless components to be written as a pure function.
 *
 * @see [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)
 */
export interface PreferStatelessFunctionRule {
  /**
   * Enforce stateless components to be written as a pure function.
   *
   * @see [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)
   */
  'react/prefer-stateless-function': PreferStatelessFunctionRuleConfig;
}
