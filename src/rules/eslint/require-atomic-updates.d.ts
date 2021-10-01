import type { RuleConfig } from '../rule-config';

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
 *
 * @see [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
 */
export type RequireAtomicUpdatesRuleConfig = RuleConfig<[]>;

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
 *
 * @see [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
 */
export interface RequireAtomicUpdatesRule {
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * @see [require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)
   */
  'require-atomic-updates': RequireAtomicUpdatesRuleConfig;
}
