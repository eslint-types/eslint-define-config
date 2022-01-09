import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryConditionOption {
  allowConstantLoopConditions?: boolean;
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
}

/**
 * Options.
 */
export type NoUnnecessaryConditionOptions = [NoUnnecessaryConditionOption?];

/**
 * Prevents conditionals where the type is always truthy or always falsy.
 *
 * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
 */
export type NoUnnecessaryConditionRuleConfig =
  RuleConfig<NoUnnecessaryConditionOptions>;

/**
 * Prevents conditionals where the type is always truthy or always falsy.
 *
 * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
 */
export interface NoUnnecessaryConditionRule {
  /**
   * Prevents conditionals where the type is always truthy or always falsy.
   *
   * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
   */
  '@typescript-eslint/no-unnecessary-condition': NoUnnecessaryConditionRuleConfig;
}
