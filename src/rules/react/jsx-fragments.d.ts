import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxFragmentsOption = 'syntax' | 'element';

/**
 * Options.
 */
export type JsxFragmentsOptions = [JsxFragmentsOption?];

/**
 * Enforce shorthand or standard form for React fragments.
 *
 * @see [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md)
 */
export type JsxFragmentsRuleConfig = RuleConfig<JsxFragmentsOptions>;

/**
 * Enforce shorthand or standard form for React fragments.
 *
 * @see [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md)
 */
export interface JsxFragmentsRule {
  /**
   * Enforce shorthand or standard form for React fragments.
   *
   * @see [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md)
   */
  'react/jsx-fragments': JsxFragmentsRuleConfig;
}
