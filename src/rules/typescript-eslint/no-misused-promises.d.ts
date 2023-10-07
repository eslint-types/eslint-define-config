import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMisusedPromisesOption {
  checksConditionals?: boolean;
  checksVoidReturn?:
    | boolean
    | {
        arguments?: boolean;
        attributes?: boolean;
        properties?: boolean;
        returns?: boolean;
        variables?: boolean;
      };
  checksSpreads?: boolean;
}

/**
 * Options.
 */
export type NoMisusedPromisesOptions = [NoMisusedPromisesOption?];

/**
 * Disallow Promises in places not designed to handle them.
 *
 * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
 */
export type NoMisusedPromisesRuleConfig = RuleConfig<NoMisusedPromisesOptions>;

/**
 * Disallow Promises in places not designed to handle them.
 *
 * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
 */
export interface NoMisusedPromisesRule {
  /**
   * Disallow Promises in places not designed to handle them.
   *
   * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
   */
  '@typescript-eslint/no-misused-promises': NoMisusedPromisesRuleConfig;
}
