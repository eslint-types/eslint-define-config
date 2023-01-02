import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedDisableOption = string[];

/**
 * Options.
 */
export type NoRestrictedDisableOptions = NoRestrictedDisableOption;

/**
 * Disallow `eslint-disable` comments about specific rules.
 *
 * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
 */
export type NoRestrictedDisableRuleConfig =
  RuleConfig<NoRestrictedDisableOptions>;

/**
 * Disallow `eslint-disable` comments about specific rules.
 *
 * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
 */
export interface NoRestrictedDisableRule {
  /**
   * Disallow `eslint-disable` comments about specific rules.
   *
   * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
   */
  'eslint-comments/no-restricted-disable': NoRestrictedDisableRuleConfig;
}
