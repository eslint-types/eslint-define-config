import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoCallbackInPromiseOption {
  exceptions?: string[];
}

/**
 * Options.
 */
export type NoCallbackInPromiseOptions = [NoCallbackInPromiseOption?];

/**
 *
 * @see [no-callback-in-promise](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
 */
export type NoCallbackInPromiseRuleConfig =
  RuleConfig<NoCallbackInPromiseOptions>;

/**
 *
 * @see [no-callback-in-promise](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
 */
export interface NoCallbackInPromiseRule {
  /**
   *
   * @see [no-callback-in-promise](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
   */
  'promise/no-callback-in-promise': NoCallbackInPromiseRuleConfig;
}
