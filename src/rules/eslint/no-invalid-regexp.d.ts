import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInvalidRegexpOption {
  allowConstructorFlags?: string[];
}

/**
 * Options.
 */
export type NoInvalidRegexpOptions = [NoInvalidRegexpOption?];

/**
 * Disallow invalid regular expression strings in `RegExp` constructors.
 *
 * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
 */
export type NoInvalidRegexpRuleConfig = RuleConfig<NoInvalidRegexpOptions>;

/**
 * Disallow invalid regular expression strings in `RegExp` constructors.
 *
 * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
 */
export interface NoInvalidRegexpRule {
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   *
   * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
   */
  'no-invalid-regexp': NoInvalidRegexpRuleConfig;
}
