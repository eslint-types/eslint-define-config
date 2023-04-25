import type { RuleConfig } from '../rule-config';

/**
 * Disallow usage of dangerous JSX properties.
 *
 * @see [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md)
 */
export type NoDangerRuleConfig = RuleConfig<[]>;

/**
 * Disallow usage of dangerous JSX properties.
 *
 * @see [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md)
 */
export interface NoDangerRule {
  /**
   * Disallow usage of dangerous JSX properties.
   *
   * @see [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md)
   */
  'react/no-danger': NoDangerRuleConfig;
}
