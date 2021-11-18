import type { RuleConfig } from '../rule-config';

/**
 * Warns when a namespace qualifier is unnecessary.
 *
 * @see [no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)
 */
export type NoUnnecessaryQualifierRuleConfig = RuleConfig<[]>;

/**
 * Warns when a namespace qualifier is unnecessary.
 *
 * @see [no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)
 */
export interface NoUnnecessaryQualifierRule {
  /**
   * Warns when a namespace qualifier is unnecessary.
   *
   * @see [no-unnecessary-qualifier](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md)
   */
  '@typescript-eslint/no-unnecessary-qualifier': NoUnnecessaryQualifierRuleConfig;
}
