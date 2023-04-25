import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface IframeHasTitleOption {
  [k: string]: any;
}

/**
 * Options.
 */
export type IframeHasTitleOptions = [IframeHasTitleOption?];

/**
 * Enforce iframe elements have a title attribute.
 *
 * @see [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md)
 */
export type IframeHasTitleRuleConfig = RuleConfig<IframeHasTitleOptions>;

/**
 * Enforce iframe elements have a title attribute.
 *
 * @see [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md)
 */
export interface IframeHasTitleRule {
  /**
   * Enforce iframe elements have a title attribute.
   *
   * @see [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md)
   */
  'jsx-a11y/iframe-has-title': IframeHasTitleRuleConfig;
}
