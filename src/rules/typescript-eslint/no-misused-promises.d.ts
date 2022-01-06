import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMisusedPromisesOption {
  checksConditionals?: boolean;
  checksVoidReturn?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoMisusedPromisesOptions = [NoMisusedPromisesOption?];

/**
 * Avoid using promises in places not designed to handle them.
 *
 * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
 */
export type NoMisusedPromisesRuleConfig = RuleConfig<NoMisusedPromisesOptions>;

/**
 * Avoid using promises in places not designed to handle them.
 *
 * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
 */
export interface NoMisusedPromisesRule {
  /**
   * Avoid using promises in places not designed to handle them.
   *
   * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
   */
  '@typescript-eslint/no-misused-promises': NoMisusedPromisesRuleConfig;
}
