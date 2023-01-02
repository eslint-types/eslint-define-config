import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
 */
export type NoPromiseInCallbackRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
 */
export interface NoPromiseInCallbackRule {
  /**
   *
   * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
   */
  'promise/no-promise-in-callback': NoPromiseInCallbackRuleConfig;
}
