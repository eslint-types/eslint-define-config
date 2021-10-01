import type { RuleConfig } from '../rule-config';

/**
 * Prevent variables used in JSX to be marked as unused.
 *
 * @see [jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
 */
export type JsxUsesVarsRuleConfig = RuleConfig<[]>;

/**
 * Prevent variables used in JSX to be marked as unused.
 *
 * @see [jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
 */
export interface JsxUsesVarsRule {
  /**
   * Prevent variables used in JSX to be marked as unused.
   *
   * @see [jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
   */
  'vue/jsx-uses-vars': JsxUsesVarsRuleConfig;
}
