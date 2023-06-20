import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireAtomicUpdatesOption {
  allowProperties?: boolean;
}

/**
 * Options.
 */
export type RequireAtomicUpdatesOptions = [RequireAtomicUpdatesOption?];

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
 *
 * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
 */
export type RequireAtomicUpdatesRuleConfig =
  RuleConfig<RequireAtomicUpdatesOptions>;

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
 *
 * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
 */
export interface RequireAtomicUpdatesRule {
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
   */
  'require-atomic-updates': RequireAtomicUpdatesRuleConfig;
}
