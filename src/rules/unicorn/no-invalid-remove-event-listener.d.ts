import type { RuleConfig } from '../rule-config';

/**
 * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
 *
 * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-invalid-remove-event-listener.md)
 */
export type NoInvalidRemoveEventListenerRuleConfig = RuleConfig<[]>;

/**
 * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
 *
 * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-invalid-remove-event-listener.md)
 */
export interface NoInvalidRemoveEventListenerRule {
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   *
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': NoInvalidRemoveEventListenerRuleConfig;
}
