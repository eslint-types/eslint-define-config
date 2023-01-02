import type { RuleConfig } from '../rule-config';

/**
 * Prefer `String#replaceAll()` over regex searches with the global flag.
 *
 * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-string-replace-all.md)
 */
export type PreferStringReplaceAllRuleConfig = RuleConfig<[]>;

/**
 * Prefer `String#replaceAll()` over regex searches with the global flag.
 *
 * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-string-replace-all.md)
 */
export interface PreferStringReplaceAllRule {
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   *
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': PreferStringReplaceAllRuleConfig;
}
