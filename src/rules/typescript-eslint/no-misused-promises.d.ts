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
 * @see [no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-promises.md)
 */
export type NoMisusedPromisesRuleConfig = RuleConfig<NoMisusedPromisesOptions>;

/**
 * Avoid using promises in places not designed to handle them.
 *
 * @see [no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-promises.md)
 */
export interface NoMisusedPromisesRule {
  /**
   * Avoid using promises in places not designed to handle them.
   *
   * @see [no-misused-promises](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-misused-promises.md)
   */
  '@typescript-eslint/no-misused-promises': NoMisusedPromisesRuleConfig;
}
