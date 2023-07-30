import type { RuleConfig } from '../rule-config';

/**
 * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
 *
 * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-date-now.md)
 */
export type PreferDateNowRuleConfig = RuleConfig<[]>;

/**
 * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
 *
 * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-date-now.md)
 */
export interface PreferDateNowRule {
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   *
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': PreferDateNowRuleConfig;
}
