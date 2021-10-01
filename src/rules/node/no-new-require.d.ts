import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @see [no-new-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md)
 */
export type NoNewRequireRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @see [no-new-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md)
 */
export interface NoNewRequireRule {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @see [no-new-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md)
   */
  'node/no-new-require': NoNewRequireRuleConfig;
}
