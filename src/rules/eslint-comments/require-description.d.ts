import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireDescriptionOption {
  ignore?: (
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
export type RequireDescriptionOptions = [RequireDescriptionOption?];

/**
 * Require include descriptions in ESLint directive-comments.
 *
 * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
 */
export type RequireDescriptionRuleConfig =
  RuleConfig<RequireDescriptionOptions>;

/**
 * Require include descriptions in ESLint directive-comments.
 *
 * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
 */
export interface RequireDescriptionRule {
  /**
   * Require include descriptions in ESLint directive-comments.
   *
   * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
   */
  'eslint-comments/require-description': RequireDescriptionRuleConfig;
}
