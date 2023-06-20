import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.env`.
 *
 * @deprecated
 *
 * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
 */
export type NoProcessEnvRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.env`.
 *
 * @deprecated
 *
 * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
 */
export interface NoProcessEnvRule {
  /**
   * Disallow the use of `process.env`.
   *
   * @deprecated
   *
   * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
   */
  'no-process-env': NoProcessEnvRuleConfig;
}
