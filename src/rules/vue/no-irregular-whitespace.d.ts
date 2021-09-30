import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoIrregularWhitespaceOption = {
  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipComments?: any;

  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipStrings?: any;

  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipTemplates?: any;

  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipRegExps?: any;

  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipHTMLAttributeValues?: any;

  /**
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  skipHTMLTextContents?: any;
};

/**
 * Options.
 */
export type NoIrregularWhitespaceOptions = [NoIrregularWhitespaceOption?];

/**
 * Disallow irregular whitespace
 *
 * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
 */
export type NoIrregularWhitespaceRuleConfig = RuleConfig<NoIrregularWhitespaceOptions>;

/**
 * Disallow irregular whitespace
 *
 * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
 */
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace
   *
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  'vue/no-irregular-whitespace': NoIrregularWhitespaceRuleConfig;
}
