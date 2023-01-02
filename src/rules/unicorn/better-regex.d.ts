import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BetterRegexOption {
  sortCharacterClasses?: boolean;
}

/**
 * Options.
 */
export type BetterRegexOptions = [BetterRegexOption?];

/**
 * Improve regexes by making them shorter, consistent, and safer.
 *
 * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/better-regex.md)
 */
export type BetterRegexRuleConfig = RuleConfig<BetterRegexOptions>;

/**
 * Improve regexes by making them shorter, consistent, and safer.
 *
 * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/better-regex.md)
 */
export interface BetterRegexRule {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   *
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': BetterRegexRuleConfig;
}
