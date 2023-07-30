import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoArrayPushPushOption {
  ignore?: any[];
}

/**
 * Options.
 */
export type NoArrayPushPushOptions = [NoArrayPushPushOption?];

/**
 * Enforce combining multiple `Array#push()` into one call.
 *
 * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-push-push.md)
 */
export type NoArrayPushPushRuleConfig = RuleConfig<NoArrayPushPushOptions>;

/**
 * Enforce combining multiple `Array#push()` into one call.
 *
 * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-push-push.md)
 */
export interface NoArrayPushPushRule {
  /**
   * Enforce combining multiple `Array#push()` into one call.
   *
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': NoArrayPushPushRuleConfig;
}
