import type { RuleConfig } from '../rule-config';

/**
 * Prefer omitting the `catch` binding parameter.
 *
 * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-optional-catch-binding.md)
 */
export type PreferOptionalCatchBindingRuleConfig = RuleConfig<[]>;

/**
 * Prefer omitting the `catch` binding parameter.
 *
 * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-optional-catch-binding.md)
 */
export interface PreferOptionalCatchBindingRule {
  /**
   * Prefer omitting the `catch` binding parameter.
   *
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': PreferOptionalCatchBindingRuleConfig;
}
