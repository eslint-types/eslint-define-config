import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MouseEventsHaveKeyEventsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type MouseEventsHaveKeyEventsOptions = [MouseEventsHaveKeyEventsOption?];

/**
 * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
 *
 * @see [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md)
 */
export type MouseEventsHaveKeyEventsRuleConfig =
  RuleConfig<MouseEventsHaveKeyEventsOptions>;

/**
 * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
 *
 * @see [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md)
 */
export interface MouseEventsHaveKeyEventsRule {
  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   *
   * @see [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md)
   */
  'jsx-a11y/mouse-events-have-key-events': MouseEventsHaveKeyEventsRuleConfig;
}
