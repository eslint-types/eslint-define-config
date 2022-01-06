import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoBaseToStringOption {
  ignoredTypeNames?: string[];
}

/**
 * Options.
 */
export type NoBaseToStringOptions = [NoBaseToStringOption?];

/**
 * Requires that `.toString()` is only called on objects which provide useful information when stringified.
 *
 * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
 */
export type NoBaseToStringRuleConfig = RuleConfig<NoBaseToStringOptions>;

/**
 * Requires that `.toString()` is only called on objects which provide useful information when stringified.
 *
 * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
 */
export interface NoBaseToStringRule {
  /**
   * Requires that `.toString()` is only called on objects which provide useful information when stringified.
   *
   * @see [no-base-to-string](https://typescript-eslint.io/rules/no-base-to-string)
   */
  '@typescript-eslint/no-base-to-string': NoBaseToStringRuleConfig;
}
