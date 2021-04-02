import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoFloatingPromisesOption = {
  /**
   * This allows you to stop the rule reporting promises consumed with void operator. This can be a good way to explicitly mark a promise as intentionally not awaited.
   *
   * @default true
   *
   * @see [ignoreVoid](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignorevoid)
   */
  ignoreVoid?: boolean;
  /**
   * This allows you to skip checking of async iife.
   *
   * @default false
   *
   * @see [ignoreIIFE](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md#ignoreiife)
   */
  ignoreIIFE?: boolean;
};

/**
 * Options.
 */
export type NoFloatingPromisesOptions = [NoFloatingPromisesOption?];

/**
 * Requires Promise-like values to be handled appropriately.
 *
 * This rule forbids usage of Promise-like values in statements without handling their errors appropriately.
 * Unhandled promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections and more.
 * Valid ways of handling a Promise-valued statement include awaiting, returning, and either calling `.then()` with two arguments or `.catch()` with one argument.
 *
 * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)
 */
export type NoFloatingPromisesRuleConfig = RuleConfig<NoFloatingPromisesOptions>;

/**
 * Requires Promise-like values to be handled appropriately.
 *
 * This rule forbids usage of Promise-like values in statements without handling their errors appropriately.
 * Unhandled promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections and more.
 * Valid ways of handling a Promise-valued statement include awaiting, returning, and either calling `.then()` with two arguments or `.catch()` with one argument.
 *
 * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)
 */
export interface NoFloatingPromisesRule {
  /**
   * Requires Promise-like values to be handled appropriately.
   *
   * This rule forbids usage of Promise-like values in statements without handling their errors appropriately.
   * Unhandled promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections and more.
   * Valid ways of handling a Promise-valued statement include awaiting, returning, and either calling `.then()` with two arguments or `.catch()` with one argument.
   *
   * @see [no-floating-promises](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md)
   */
  '@typescript-eslint/no-floating-promises': NoFloatingPromisesRuleConfig;
}
