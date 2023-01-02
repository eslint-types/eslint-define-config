import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUseOption {
  allow?: (
    | 'eslint'
    | 'eslint-disable'
    | 'eslint-disable-line'
    | 'eslint-disable-next-line'
    | 'eslint-enable'
    | 'eslint-env'
    | 'exported'
    | 'global'
    | 'globals'
  )[];
}

/**
 * Options.
 */
export type NoUseOptions = [NoUseOption?];

/**
 * Disallow ESLint directive-comments.
 *
 * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
 */
export type NoUseRuleConfig = RuleConfig<NoUseOptions>;

/**
 * Disallow ESLint directive-comments.
 *
 * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
 */
export interface NoUseRule {
  /**
   * Disallow ESLint directive-comments.
   *
   * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
   */
  'eslint-comments/no-use': NoUseRuleConfig;
}
