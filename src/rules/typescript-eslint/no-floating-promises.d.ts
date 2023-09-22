import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoFloatingPromisesOption {
  /**
   * Whether to ignore `void` expressions.
   */
  ignoreVoid?: boolean;
  /**
   * Whether to ignore async IIFEs (Immediately Invoked Function Expressions).
   */
  ignoreIIFE?: boolean;
}

/**
 * Options.
 */
export type NoFloatingPromisesOptions = [NoFloatingPromisesOption?];

/**
 * Require Promise-like statements to be handled appropriately.
 *
 * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
 */
export type NoFloatingPromisesRuleConfig =
  RuleConfig<NoFloatingPromisesOptions>;

/**
 * Require Promise-like statements to be handled appropriately.
 *
 * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
 */
export interface NoFloatingPromisesRule {
  /**
   * Require Promise-like statements to be handled appropriately.
   *
   * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
   */
  '@typescript-eslint/no-floating-promises': NoFloatingPromisesRuleConfig;
}
