import type { RuleConfig } from '../rule-config';

/**
 * Enforces that type arguments will not be used if not required.
 *
 * @see [no-unnecessary-type-arguments](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md)
 */
export type NoUnnecessaryTypeArgumentsRuleConfig = RuleConfig<[]>;

/**
 * Enforces that type arguments will not be used if not required.
 *
 * @see [no-unnecessary-type-arguments](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md)
 */
export interface NoUnnecessaryTypeArgumentsRule {
  /**
   * Enforces that type arguments will not be used if not required.
   *
   * @see [no-unnecessary-type-arguments](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md)
   */
  '@typescript-eslint/no-unnecessary-type-arguments': NoUnnecessaryTypeArgumentsRuleConfig;
}
