import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @see [no-new-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md)
 */
export type NoNewRequireRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators with calls to `require`.
 *
 * @see [no-new-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md)
 */
export interface NoNewRequireRule {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @see [no-new-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md)
   */
  'n/no-new-require': NoNewRequireRuleConfig;
}
