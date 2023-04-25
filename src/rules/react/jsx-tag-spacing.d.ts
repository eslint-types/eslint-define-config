import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxTagSpacingOption {
  closingSlash?: 'always' | 'never' | 'allow';
  beforeSelfClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
  afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
  beforeClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
}

/**
 * Options.
 */
export type JsxTagSpacingOptions = [JsxTagSpacingOption?];

/**
 * Enforce whitespace in and around the JSX opening and closing brackets.
 *
 * @see [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)
 */
export type JsxTagSpacingRuleConfig = RuleConfig<JsxTagSpacingOptions>;

/**
 * Enforce whitespace in and around the JSX opening and closing brackets.
 *
 * @see [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)
 */
export interface JsxTagSpacingRule {
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   *
   * @see [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)
   */
  'react/jsx-tag-spacing': JsxTagSpacingRuleConfig;
}
