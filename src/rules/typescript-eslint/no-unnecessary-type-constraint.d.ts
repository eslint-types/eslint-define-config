import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary constraints on generic types.
 *
 * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
 */
export type NoUnnecessaryTypeConstraintRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary constraints on generic types.
 *
 * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
 */
export interface NoUnnecessaryTypeConstraintRule {
  /**
   * Disallow unnecessary constraints on generic types.
   *
   * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
   */
  '@typescript-eslint/no-unnecessary-type-constraint': NoUnnecessaryTypeConstraintRuleConfig;
}
