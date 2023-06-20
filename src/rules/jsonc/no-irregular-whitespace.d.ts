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
 * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)
 */
export type NoIrregularWhitespaceRuleConfig =
  RuleConfig<NoIrregularWhitespaceOptions>;

/**
 * Disallow irregular whitespace.
 *
 * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)
 */
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)
   */
  'jsonc/no-irregular-whitespace': NoIrregularWhitespaceRuleConfig;
}
