import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoIrregularWhitespaceOption {
  skipComments?: boolean;
  skipStrings?: boolean;
  skipTemplates?: boolean;
  skipRegExps?: boolean;
  skipHTMLAttributeValues?: boolean;
  skipHTMLTextContents?: boolean;
}

/**
 * Options.
 */
export type NoIrregularWhitespaceOptions = [NoIrregularWhitespaceOption?];

/**
 * Disallow irregular whitespace in `.vue` files.
 *
 * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
 */
export type NoIrregularWhitespaceRuleConfig =
  RuleConfig<NoIrregularWhitespaceOptions>;

/**
 * Disallow irregular whitespace in `.vue` files.
 *
 * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
 */
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace in `.vue` files.
   *
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  'vue/no-irregular-whitespace': NoIrregularWhitespaceRuleConfig;
}
