import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferAddEventListenerOption {
  excludedPackages?: string[];
}

/**
 * Options.
 */
export type PreferAddEventListenerOptions = [PreferAddEventListenerOption?];

/**
 * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
 *
 * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-add-event-listener.md)
 */
export type PreferAddEventListenerRuleConfig =
  RuleConfig<PreferAddEventListenerOptions>;

/**
 * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
 *
 * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-add-event-listener.md)
 */
export interface PreferAddEventListenerRule {
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   *
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': PreferAddEventListenerRuleConfig;
}
