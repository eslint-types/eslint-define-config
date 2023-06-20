import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoTrailingSpacesOption {
  skipBlankLines?: boolean;
  ignoreComments?: boolean;
}

/**
 * Options.
 */
export type NoTrailingSpacesOptions = [NoTrailingSpacesOption?];

/**
 * Disallow trailing whitespace at the end of lines.
 *
 * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
 */
export type NoTrailingSpacesRuleConfig = RuleConfig<NoTrailingSpacesOptions>;

/**
 * Disallow trailing whitespace at the end of lines.
 *
 * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
 */
export interface NoTrailingSpacesRule {
  /**
   * Disallow trailing whitespace at the end of lines.
   *
   * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
   */
  'no-trailing-spaces': NoTrailingSpacesRuleConfig;
}
