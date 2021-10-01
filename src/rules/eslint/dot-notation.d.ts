import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DotNotationOption {
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
  allowPattern?: string;
}

/**
 * Options.
 */
export type DotNotationOptions = [DotNotationOption?];

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
 */
export type DotNotationRuleConfig = RuleConfig<DotNotationOptions>;

/**
 * Enforce dot notation whenever possible.
 *
 * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
 */
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
   */
  'dot-notation': DotNotationRuleConfig;
}
