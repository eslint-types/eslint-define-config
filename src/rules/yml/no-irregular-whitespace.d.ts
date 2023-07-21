import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoIrregularWhitespaceOption {
  skipComments?: boolean;
  skipQuotedScalars?: boolean;
}

/**
 * Options.
 */
export type NoIrregularWhitespaceOptions = [NoIrregularWhitespaceOption?];

/**
 * Disallow irregular whitespace.
 *
 * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)
 */
export type NoIrregularWhitespaceRuleConfig =
  RuleConfig<NoIrregularWhitespaceOptions>;

/**
 * Disallow irregular whitespace.
 *
 * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)
 */
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)
   */
  'yml/no-irregular-whitespace': NoIrregularWhitespaceRuleConfig;
}
