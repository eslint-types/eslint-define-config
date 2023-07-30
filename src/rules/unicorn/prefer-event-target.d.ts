import type { RuleConfig } from '../rule-config';

/**
 * Prefer `EventTarget` over `EventEmitter`.
 *
 * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-event-target.md)
 */
export type PreferEventTargetRuleConfig = RuleConfig<[]>;

/**
 * Prefer `EventTarget` over `EventEmitter`.
 *
 * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-event-target.md)
 */
export interface PreferEventTargetRule {
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   *
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': PreferEventTargetRuleConfig;
}
