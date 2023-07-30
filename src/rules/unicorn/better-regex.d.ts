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
 * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/better-regex.md)
 */
export type BetterRegexRuleConfig = RuleConfig<BetterRegexOptions>;

/**
 * Improve regexes by making them shorter, consistent, and safer.
 *
 * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/better-regex.md)
 */
export interface BetterRegexRule {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   *
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': BetterRegexRuleConfig;
}
