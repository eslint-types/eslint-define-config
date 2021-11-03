import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingRequireOption {
  allowModules?: string[];
  tryExtensions?: string[];
  resolvePaths?: string[];
}

/**
 * Options.
 */
export type NoMissingRequireOptions = [NoMissingRequireOption?];

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
 */
export type NoMissingRequireRuleConfig = RuleConfig<NoMissingRequireOptions>;

/**
 * Disallow `require()` expressions which import non-existence modules.
 *
 * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
 */
export interface NoMissingRequireRule {
  /**
   * Disallow `require()` expressions which import non-existence modules.
   *
   * @see [no-missing-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-require.md)
   */
  'node/no-missing-require': NoMissingRequireRuleConfig;
}
