import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAutofocusOption {
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoAutofocusOptions = [NoAutofocusOption?];

/**
 * Enforce autoFocus prop is not used.
 *
 * @see [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md)
 */
export type NoAutofocusRuleConfig = RuleConfig<NoAutofocusOptions>;

/**
 * Enforce autoFocus prop is not used.
 *
 * @see [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md)
 */
export interface NoAutofocusRule {
  /**
   * Enforce autoFocus prop is not used.
   *
   * @see [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md)
   */
  'jsx-a11y/no-autofocus': NoAutofocusRuleConfig;
}
