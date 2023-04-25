import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AccessibleEmojiOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type AccessibleEmojiOptions = [AccessibleEmojiOption?];

/**
 * Enforce emojis are wrapped in `<span>` and provide screenreader access.
 *
 * @deprecated
 *
 * @see [accessible-emoji](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md)
 */
export type AccessibleEmojiRuleConfig = RuleConfig<AccessibleEmojiOptions>;

/**
 * Enforce emojis are wrapped in `<span>` and provide screenreader access.
 *
 * @deprecated
 *
 * @see [accessible-emoji](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md)
 */
export interface AccessibleEmojiRule {
  /**
   * Enforce emojis are wrapped in `<span>` and provide screenreader access.
   *
   * @deprecated
   *
   * @see [accessible-emoji](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md)
   */
  'jsx-a11y/accessible-emoji': AccessibleEmojiRuleConfig;
}
