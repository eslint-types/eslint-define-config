import type { RuleConfig } from '../rule-config';

/**
 * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
 *
 * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-code-point.md)
 */
export type PreferCodePointRuleConfig = RuleConfig<[]>;

/**
 * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
 *
 * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-code-point.md)
 */
export interface PreferCodePointRule {
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   *
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': PreferCodePointRuleConfig;
}
