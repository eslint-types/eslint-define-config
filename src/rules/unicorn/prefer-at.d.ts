import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferAtOption {
  getLastElementFunctions?: any[];
  checkAllIndexAccess?: boolean;
}

/**
 * Options.
 */
export type PreferAtOptions = [PreferAtOption?];

/**
 * Prefer `.at()` method for index access and `String#charAt()`.
 *
 * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-at.md)
 */
export type PreferAtRuleConfig = RuleConfig<PreferAtOptions>;

/**
 * Prefer `.at()` method for index access and `String#charAt()`.
 *
 * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-at.md)
 */
export interface PreferAtRule {
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   *
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': PreferAtRuleConfig;
}
