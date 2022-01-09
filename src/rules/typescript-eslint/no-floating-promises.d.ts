import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoFloatingPromisesOption {
  ignoreVoid?: boolean;
  ignoreIIFE?: boolean;
}

/**
 * Options.
 */
export type NoFloatingPromisesOptions = [NoFloatingPromisesOption?];

/**
 * Requires Promise-like values to be handled appropriately.
 *
 * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
 */
export type NoFloatingPromisesRuleConfig =
  RuleConfig<NoFloatingPromisesOptions>;

/**
 * Requires Promise-like values to be handled appropriately.
 *
 * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
 */
export interface NoFloatingPromisesRule {
  /**
   * Requires Promise-like values to be handled appropriately.
   *
   * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
   */
  '@typescript-eslint/no-floating-promises': NoFloatingPromisesRuleConfig;
}
