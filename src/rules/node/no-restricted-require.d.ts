import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedRequireOption = (
  | string
  | {
      name: string | string[];
      message?: string;
    }
)[];

/**
 * Options.
 */
export type NoRestrictedRequireOptions = [NoRestrictedRequireOption?];

/**
 * Disallow specified modules when loaded by `require`.
 *
 * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-require.md)
 */
export type NoRestrictedRequireRuleConfig =
  RuleConfig<NoRestrictedRequireOptions>;

/**
 * Disallow specified modules when loaded by `require`.
 *
 * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-require.md)
 */
export interface NoRestrictedRequireRule {
  /**
   * Disallow specified modules when loaded by `require`.
   *
   * @see [no-restricted-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-restricted-require.md)
   */
  'node/no-restricted-require': NoRestrictedRequireRuleConfig;
}
