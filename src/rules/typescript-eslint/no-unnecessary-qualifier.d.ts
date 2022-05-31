import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary namespace qualifiers.
 *
 * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
 */
export type NoUnnecessaryQualifierRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary namespace qualifiers.
 *
 * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
 */
export interface NoUnnecessaryQualifierRule {
  /**
   * Disallow unnecessary namespace qualifiers.
   *
   * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
   */
  '@typescript-eslint/no-unnecessary-qualifier': NoUnnecessaryQualifierRuleConfig;
}
