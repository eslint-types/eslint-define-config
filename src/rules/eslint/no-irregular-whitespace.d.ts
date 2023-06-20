import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoIrregularWhitespaceOption {
  skipComments?: boolean;
  skipStrings?: boolean;
  skipTemplates?: boolean;
  skipRegExps?: boolean;
  skipJSXText?: boolean;
}

/**
 * Options.
 */
export type NoIrregularWhitespaceOptions = [NoIrregularWhitespaceOption?];

/**
 * Disallow irregular whitespace.
 *
 * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
 */
export type NoIrregularWhitespaceRuleConfig =
  RuleConfig<NoIrregularWhitespaceOptions>;

/**
 * Disallow irregular whitespace.
 *
 * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
 */
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
   */
  'no-irregular-whitespace': NoIrregularWhitespaceRuleConfig;
}
