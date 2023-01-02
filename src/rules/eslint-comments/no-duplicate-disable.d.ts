import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate `eslint-disable` comments.
 *
 * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
 */
export type NoDuplicateDisableRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate `eslint-disable` comments.
 *
 * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
 */
export interface NoDuplicateDisableRule {
  /**
   * Disallow duplicate `eslint-disable` comments.
   *
   * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
   */
  'eslint-comments/no-duplicate-disable': NoDuplicateDisableRuleConfig;
}
