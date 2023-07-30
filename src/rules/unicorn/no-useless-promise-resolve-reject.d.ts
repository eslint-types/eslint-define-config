import type { RuleConfig } from '../rule-config';

/**
 * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
 *
 * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-promise-resolve-reject.md)
 */
export type NoUselessPromiseResolveRejectRuleConfig = RuleConfig<[]>;

/**
 * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
 *
 * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-promise-resolve-reject.md)
 */
export interface NoUselessPromiseResolveRejectRule {
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
   *
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': NoUselessPromiseResolveRejectRuleConfig;
}
