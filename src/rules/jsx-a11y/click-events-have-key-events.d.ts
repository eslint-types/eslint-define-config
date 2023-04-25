import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ClickEventsHaveKeyEventsOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type ClickEventsHaveKeyEventsOptions = [ClickEventsHaveKeyEventsOption?];

/**
 * Enforce a clickable non-interactive element has at least one keyboard event listener.
 *
 * @see [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md)
 */
export type ClickEventsHaveKeyEventsRuleConfig =
  RuleConfig<ClickEventsHaveKeyEventsOptions>;

/**
 * Enforce a clickable non-interactive element has at least one keyboard event listener.
 *
 * @see [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md)
 */
export interface ClickEventsHaveKeyEventsRule {
  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * @see [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md)
   */
  'jsx-a11y/click-events-have-key-events': ClickEventsHaveKeyEventsRuleConfig;
}
