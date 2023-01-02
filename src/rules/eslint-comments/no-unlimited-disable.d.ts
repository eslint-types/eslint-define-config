import type { RuleConfig } from '../rule-config';

/**
 * Disallow `eslint-disable` comments without rule names.
 *
 * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
 */
export type NoUnlimitedDisableRuleConfig = RuleConfig<[]>;

/**
 * Disallow `eslint-disable` comments without rule names.
 *
 * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
 */
export interface NoUnlimitedDisableRule {
  /**
   * Disallow `eslint-disable` comments without rule names.
   *
   * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
   */
  'eslint-comments/no-unlimited-disable': NoUnlimitedDisableRuleConfig;
}
