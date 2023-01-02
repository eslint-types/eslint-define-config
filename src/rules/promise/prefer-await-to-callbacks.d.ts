import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
 */
export type PreferAwaitToCallbacksRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
 */
export interface PreferAwaitToCallbacksRule {
  /**
   *
   * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
   */
  'promise/prefer-await-to-callbacks': PreferAwaitToCallbacksRuleConfig;
}
