import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DotNotationOption = {
  /**
   * Set to `false` to follow ECMAScript version 3 compatible style, avoiding dot notation for reserved word properties.
   *
   * @default true
   *
   * @see [allowKeywords](https://eslint.org/docs/rules/dot-notation#allowkeywords)
   */
  allowKeywords?: boolean;
  /**
   * Set to a regular expression string to allow bracket notation for property names that match a pattern.
   *
   * @default false
   *
   * @see [allowPattern](https://eslint.org/docs/rules/dot-notation#allowpattern)
   */
  allowPattern?: boolean;
};

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Require Dot Notation.
 *
 * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Require Dot Notation.
 *
 * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
 */
export interface DotNotationRule {
  /**
   * Require Dot Notation.
   *
   * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
   */
  'dot-notation': DotNotationRuleConfig;
}
