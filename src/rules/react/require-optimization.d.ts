import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireOptimizationOption {
  allowDecorators?: string[];
}

/**
 * Options.
 */
export type RequireOptimizationOptions = [RequireOptimizationOption?];

/**
 * Enforce React components to have a shouldComponentUpdate method.
 *
 * @see [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)
 */
export type RequireOptimizationRuleConfig =
  RuleConfig<RequireOptimizationOptions>;

/**
 * Enforce React components to have a shouldComponentUpdate method.
 *
 * @see [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)
 */
export interface RequireOptimizationRule {
  /**
   * Enforce React components to have a shouldComponentUpdate method.
   *
   * @see [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)
   */
  'react/require-optimization': RequireOptimizationRuleConfig;
}
