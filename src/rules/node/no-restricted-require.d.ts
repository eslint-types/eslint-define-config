import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedRequireOption = Array<string | { name: string | string[]; message?: string }>;

/**
 * Options.
 */
export type NoRestrictedRequireOptions = [NoRestrictedRequireOption?];

/**
 * This rule allows you to specify modules that you don’t want to use in your application..
 *
 * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md)
 */
export type NoRestrictedRequireRuleConfig = RuleConfig<NoRestrictedRequireOptions>;

/**
 * This rule allows you to specify modules that you don’t want to use in your application..
 *
 * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md)
 */
export interface NoRestrictedRequireRule {
  /**
   * This rule allows you to specify modules that you don’t want to use in your application..
   *
   * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-restricted-require.md)
   */
  'node/no-restricted-require': NoRestrictedRequireRuleConfig;
}
