import type { RuleConfig } from '../rule-config';

/**
 * Options.
 */
export type JsxNoConstructedContextValuesOptions = [];

/**
 * Disallows JSX context provider values from taking values that will cause needless rerenders.
 *
 * @see [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)
 */
export type JsxNoConstructedContextValuesRuleConfig =
  RuleConfig<JsxNoConstructedContextValuesOptions>;

/**
 * Disallows JSX context provider values from taking values that will cause needless rerenders.
 *
 * @see [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)
 */
export interface JsxNoConstructedContextValuesRule {
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   *
   * @see [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)
   */
  'react/jsx-no-constructed-context-values': JsxNoConstructedContextValuesRuleConfig;
}
