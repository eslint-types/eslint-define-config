import type { RuleConfig } from '../rule-config';

/**
 * Disallow variables used in JSX to be incorrectly marked as unused.
 *
 * @see [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)
 */
export type JsxUsesVarsRuleConfig = RuleConfig<[]>;

/**
 * Disallow variables used in JSX to be incorrectly marked as unused.
 *
 * @see [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)
 */
export interface JsxUsesVarsRule {
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused.
   *
   * @see [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)
   */
  'react/jsx-uses-vars': JsxUsesVarsRuleConfig;
}
