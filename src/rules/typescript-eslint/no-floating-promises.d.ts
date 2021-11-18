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
 * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-floating-promises.md)
 */
export type NoFloatingPromisesRuleConfig = RuleConfig<NoFloatingPromisesOptions>;

/**
 * Requires Promise-like values to be handled appropriately.
 *
 * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-floating-promises.md)
 */
export interface NoFloatingPromisesRule {
  /**
   * Requires Promise-like values to be handled appropriately.
   *
   * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-floating-promises.md)
   */
  '@typescript-eslint/no-floating-promises': NoFloatingPromisesRuleConfig;
}
