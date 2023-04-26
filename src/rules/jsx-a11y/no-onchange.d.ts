import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoOnchangeOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type NoOnchangeOptions = [NoOnchangeOption?];

/**
 * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
 *
 * @deprecated
 *
 * @see [no-onchange](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md)
 */
export type NoOnchangeRuleConfig = RuleConfig<NoOnchangeOptions>;

/**
 * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
 *
 * @deprecated
 *
 * @see [no-onchange](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md)
 */
export interface NoOnchangeRule {
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   *
   * @deprecated
   *
   * @see [no-onchange](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md)
   */
  'jsx-a11y/no-onchange': NoOnchangeRuleConfig;
}
