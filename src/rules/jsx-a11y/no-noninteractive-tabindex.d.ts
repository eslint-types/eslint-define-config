import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNoninteractiveTabindexOption {
  /**
   * An array of ARIA roles
   */
  roles?: string[];
  /**
   * An array of HTML tag names
   */
  tags?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoNoninteractiveTabindexOptions = [NoNoninteractiveTabindexOption?];

/**
 * `tabIndex` should only be declared on interactive elements.
 *
 * @see [no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md)
 */
export type NoNoninteractiveTabindexRuleConfig =
  RuleConfig<NoNoninteractiveTabindexOptions>;

/**
 * `tabIndex` should only be declared on interactive elements.
 *
 * @see [no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md)
 */
export interface NoNoninteractiveTabindexRule {
  /**
   * `tabIndex` should only be declared on interactive elements.
   *
   * @see [no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md)
   */
  'jsx-a11y/no-noninteractive-tabindex': NoNoninteractiveTabindexRuleConfig;
}
