import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.env`.
 *
 * @see [no-process-env](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-process-env.md)
 */
export type NoProcessEnvRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.env`.
 *
 * @see [no-process-env](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-process-env.md)
 */
export interface NoProcessEnvRule {
  /**
   * Disallow the use of `process.env`.
   *
   * @see [no-process-env](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-process-env.md)
   */
  'n/no-process-env': NoProcessEnvRuleConfig;
}
