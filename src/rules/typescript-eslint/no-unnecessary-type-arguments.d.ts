import type { RuleConfig } from '../rule-config';

/**
 * Enforces that type arguments will not be used if not required.
 *
 * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
 */
export type NoUnnecessaryTypeArgumentsRuleConfig = RuleConfig<[]>;

/**
 * Enforces that type arguments will not be used if not required.
 *
 * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
 */
export interface NoUnnecessaryTypeArgumentsRule {
  /**
   * Enforces that type arguments will not be used if not required.
   *
   * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
   */
  '@typescript-eslint/no-unnecessary-type-arguments': NoUnnecessaryTypeArgumentsRuleConfig;
}
