import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAccessKeyOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type NoAccessKeyOptions = [NoAccessKeyOption?];

/**
 * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
 *
 * @see [no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md)
 */
export type NoAccessKeyRuleConfig = RuleConfig<NoAccessKeyOptions>;

/**
 * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
 *
 * @see [no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md)
 */
export interface NoAccessKeyRule {
  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
   *
   * @see [no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md)
   */
  'jsx-a11y/no-access-key': NoAccessKeyRuleConfig;
}
