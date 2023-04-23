import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of the return value of ReactDOM.render.
 *
 * @see [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)
 */
export type NoRenderReturnValueRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of the return value of ReactDOM.render.
 *
 * @see [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)
 */
export interface NoRenderReturnValueRule {
  /**
   * Disallow usage of the return value of ReactDOM.render.
   *
   * @see [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)
   */
  'react/no-render-return-value': NoRenderReturnValueRuleConfig;
}
