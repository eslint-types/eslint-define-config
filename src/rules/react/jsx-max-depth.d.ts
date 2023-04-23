import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxMaxDepthOption {
  max?: number;
}

/**
 * Options.
 */
export type JsxMaxDepthOptions = [JsxMaxDepthOption?];

/**
 * Enforce JSX maximum depth.
 *
 * @see [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)
 */
export type JsxMaxDepthRuleConfig = RuleConfig<JsxMaxDepthOptions>;

/**
 * Enforce JSX maximum depth.
 *
 * @see [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)
 */
export interface JsxMaxDepthRule {
  /**
   * Enforce JSX maximum depth.
   *
   * @see [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)
   */
  'react/jsx-max-depth': JsxMaxDepthRuleConfig;
}
