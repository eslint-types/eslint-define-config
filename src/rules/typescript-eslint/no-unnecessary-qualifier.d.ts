import type { RuleConfig } from '../rule-config';

/**
 * Warns when a namespace qualifier is unnecessary.
 *
 * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
 */
export type NoUnnecessaryQualifierRuleConfig = RuleConfig<[]>;

/**
 * Warns when a namespace qualifier is unnecessary.
 *
 * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
 */
export interface NoUnnecessaryQualifierRule {
  /**
   * Warns when a namespace qualifier is unnecessary.
   *
   * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
   */
  '@typescript-eslint/no-unnecessary-qualifier': NoUnnecessaryQualifierRuleConfig;
}
