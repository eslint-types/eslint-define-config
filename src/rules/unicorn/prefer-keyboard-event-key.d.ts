import type { RuleConfig } from '../rule-config';

/**
 * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
 *
 * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-keyboard-event-key.md)
 */
export type PreferKeyboardEventKeyRuleConfig = RuleConfig<[]>;

/**
 * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
 *
 * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-keyboard-event-key.md)
 */
export interface PreferKeyboardEventKeyRule {
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   *
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': PreferKeyboardEventKeyRuleConfig;
}
