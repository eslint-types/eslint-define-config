import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoStringRefsOption {
  noTemplateLiterals?: boolean;
}

/**
 * Options.
 */
export type NoStringRefsOptions = [NoStringRefsOption?];

/**
 * Disallow using string references.
 *
 * @see [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)
 */
export type NoStringRefsRuleConfig = RuleConfig<NoStringRefsOptions>;

/**
 * Disallow using string references.
 *
 * @see [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)
 */
export interface NoStringRefsRule {
  /**
   * Disallow using string references.
   *
   * @see [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)
   */
  'react/no-string-refs': NoStringRefsRuleConfig;
}
