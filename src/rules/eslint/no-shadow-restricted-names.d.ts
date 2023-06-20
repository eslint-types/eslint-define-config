import type { RuleConfig } from '../rule-config';

/**
 * Disallow identifiers from shadowing restricted names.
 *
 * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
 */
export type NoShadowRestrictedNamesRuleConfig = RuleConfig<[]>;

/**
 * Disallow identifiers from shadowing restricted names.
 *
 * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
 */
export interface NoShadowRestrictedNamesRule {
  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': NoShadowRestrictedNamesRuleConfig;
}
