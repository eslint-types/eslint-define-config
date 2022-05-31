import type { RuleConfig } from '../rule-config';

/**
 * Disallow type arguments that are equal to the default.
 *
 * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
 */
export type NoUnnecessaryTypeArgumentsRuleConfig = RuleConfig<[]>;

/**
 * Disallow type arguments that are equal to the default.
 *
 * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
 */
export interface NoUnnecessaryTypeArgumentsRule {
  /**
   * Disallow type arguments that are equal to the default.
   *
   * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
   */
  '@typescript-eslint/no-unnecessary-type-arguments': NoUnnecessaryTypeArgumentsRuleConfig;
}
