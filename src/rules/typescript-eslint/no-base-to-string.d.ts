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
 * @see [no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-base-to-string.md)
 */
export type NoBaseToStringRuleConfig = RuleConfig<NoBaseToStringOptions>;

/**
 * Requires that `.toString()` is only called on objects which provide useful information when stringified.
 *
 * @see [no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-base-to-string.md)
 */
export interface NoBaseToStringRule {
  /**
   * Requires that `.toString()` is only called on objects which provide useful information when stringified.
   *
   * @see [no-base-to-string](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-base-to-string.md)
   */
  '@typescript-eslint/no-base-to-string': NoBaseToStringRuleConfig;
}
