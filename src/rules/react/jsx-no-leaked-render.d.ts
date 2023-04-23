import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxNoLeakedRenderOption {
  validStrategies?: ('ternary' | 'coerce')[];
}

/**
 * Options.
 */
export type JsxNoLeakedRenderOptions = [JsxNoLeakedRenderOption?];

/**
 * Disallow problematic leaked values from being rendered.
 *
 * @see [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)
 */
export type JsxNoLeakedRenderRuleConfig = RuleConfig<JsxNoLeakedRenderOptions>;

/**
 * Disallow problematic leaked values from being rendered.
 *
 * @see [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)
 */
export interface JsxNoLeakedRenderRule {
  /**
   * Disallow problematic leaked values from being rendered.
   *
   * @see [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)
   */
  'react/jsx-no-leaked-render': JsxNoLeakedRenderRuleConfig;
}
