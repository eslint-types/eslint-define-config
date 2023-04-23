import type { RuleConfig } from '../rule-config';

/**
 * Suggest having hooks before any test cases.
 *
 * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
 */
export type PreferHooksOnTopRuleConfig = RuleConfig<[]>;

/**
 * Suggest having hooks before any test cases.
 *
 * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
 */
export interface PreferHooksOnTopRule {
  /**
   * Suggest having hooks before any test cases.
   *
   * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
   */
  'vitest/prefer-hooks-on-top': PreferHooksOnTopRuleConfig;
}
