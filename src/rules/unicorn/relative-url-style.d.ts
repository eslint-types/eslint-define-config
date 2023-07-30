import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RelativeUrlStyleOption = 'never' | 'always';

/**
 * Options.
 */
export type RelativeUrlStyleOptions = [RelativeUrlStyleOption?];

/**
 * Enforce consistent relative URL style.
 *
 * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/relative-url-style.md)
 */
export type RelativeUrlStyleRuleConfig = RuleConfig<RelativeUrlStyleOptions>;

/**
 * Enforce consistent relative URL style.
 *
 * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/relative-url-style.md)
 */
export interface RelativeUrlStyleRule {
  /**
   * Enforce consistent relative URL style.
   *
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': RelativeUrlStyleRuleConfig;
}
