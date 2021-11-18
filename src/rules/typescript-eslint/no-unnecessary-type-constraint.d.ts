import type { RuleConfig } from '../rule-config';

/**
 * Disallows unnecessary constraints on generic types.
 *
 * @see [no-unnecessary-type-constraint](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)
 */
export type NoUnnecessaryTypeConstraintRuleConfig = RuleConfig<[]>;

/**
 * Disallows unnecessary constraints on generic types.
 *
 * @see [no-unnecessary-type-constraint](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)
 */
export interface NoUnnecessaryTypeConstraintRule {
  /**
   * Disallows unnecessary constraints on generic types.
   *
   * @see [no-unnecessary-type-constraint](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md)
   */
  '@typescript-eslint/no-unnecessary-type-constraint': NoUnnecessaryTypeConstraintRuleConfig;
}
