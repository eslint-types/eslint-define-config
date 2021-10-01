import type { RuleConfig } from '../rule-config';

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @see [global-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md)
 */
export type GlobalRequireRuleConfig = RuleConfig<[]>;

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @see [global-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md)
 */
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @see [global-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/global-require.md)
   */
  'node/global-require': GlobalRequireRuleConfig;
}
