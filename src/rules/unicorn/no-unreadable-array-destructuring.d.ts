import type { RuleConfig } from '../rule-config';

/**
 * Disallow unreadable array destructuring.
 *
 * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-array-destructuring.md)
 */
export type NoUnreadableArrayDestructuringRuleConfig = RuleConfig<[]>;

/**
 * Disallow unreadable array destructuring.
 *
 * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-array-destructuring.md)
 */
export interface NoUnreadableArrayDestructuringRule {
  /**
   * Disallow unreadable array destructuring.
   *
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v44.0.0/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': NoUnreadableArrayDestructuringRuleConfig;
}
