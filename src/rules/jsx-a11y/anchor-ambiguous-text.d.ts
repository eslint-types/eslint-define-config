import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AnchorAmbiguousTextOption {
  words?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type AnchorAmbiguousTextOptions = [AnchorAmbiguousTextOption?];

/**
 * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
 *
 * @see [anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md)
 */
export type AnchorAmbiguousTextRuleConfig =
  RuleConfig<AnchorAmbiguousTextOptions>;

/**
 * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
 *
 * @see [anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md)
 */
export interface AnchorAmbiguousTextRule {
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   *
   * @see [anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md)
   */
  'jsx-a11y/anchor-ambiguous-text': AnchorAmbiguousTextRuleConfig;
}
