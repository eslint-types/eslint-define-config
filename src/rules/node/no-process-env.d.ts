import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.env`.
 *
 * @see [no-process-env](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md)
 */
export type NoProcessEnvRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.env`.
 *
 * @see [no-process-env](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md)
 */
export interface NoProcessEnvRule {
  /**
   * Disallow the use of `process.env`.
   *
   * @see [no-process-env](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-process-env.md)
   */
  'node/no-process-env': NoProcessEnvRuleConfig;
}
