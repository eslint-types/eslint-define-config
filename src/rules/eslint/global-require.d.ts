import type { RuleConfig } from '../rule-config';

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @deprecated
 *
 * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
 */
export type GlobalRequireRuleConfig = RuleConfig<[]>;

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @deprecated
 *
 * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
 */
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @deprecated
   *
   * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
   */
  'global-require': GlobalRequireRuleConfig;
}
