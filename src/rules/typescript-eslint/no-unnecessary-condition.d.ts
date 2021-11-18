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
 * @see [no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)
 */
export type NoUnnecessaryConditionRuleConfig = RuleConfig<NoUnnecessaryConditionOptions>;

/**
 * Prevents conditionals where the type is always truthy or always falsy.
 *
 * @see [no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)
 */
export interface NoUnnecessaryConditionRule {
  /**
   * Prevents conditionals where the type is always truthy or always falsy.
   *
   * @see [no-unnecessary-condition](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md)
   */
  '@typescript-eslint/no-unnecessary-condition': NoUnnecessaryConditionRuleConfig;
}
