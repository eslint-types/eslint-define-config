import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAriaHiddenOnFocusableOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type NoAriaHiddenOnFocusableOptions = [NoAriaHiddenOnFocusableOption?];

/**
 * Disallow `aria-hidden="true"` from being set on focusable elements.
 *
 * @see [no-aria-hidden-on-focusable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md)
 */
export type NoAriaHiddenOnFocusableRuleConfig =
  RuleConfig<NoAriaHiddenOnFocusableOptions>;

/**
 * Disallow `aria-hidden="true"` from being set on focusable elements.
 *
 * @see [no-aria-hidden-on-focusable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md)
 */
export interface NoAriaHiddenOnFocusableRule {
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   *
   * @see [no-aria-hidden-on-focusable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md)
   */
  'jsx-a11y/no-aria-hidden-on-focusable': NoAriaHiddenOnFocusableRuleConfig;
}
