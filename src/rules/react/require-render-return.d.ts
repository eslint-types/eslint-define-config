import type { RuleConfig } from '../rule-config';

/**
 * Enforce ES5 or ES6 class for returning value in render function.
 *
 * @see [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
 */
export type RequireRenderReturnRuleConfig = RuleConfig<[]>;

/**
 * Enforce ES5 or ES6 class for returning value in render function.
 *
 * @see [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
 */
export interface RequireRenderReturnRule {
  /**
   * Enforce ES5 or ES6 class for returning value in render function.
   *
   * @see [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
   */
  'react/require-render-return': RequireRenderReturnRuleConfig;
}
