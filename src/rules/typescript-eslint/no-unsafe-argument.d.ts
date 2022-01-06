import type { RuleConfig } from '../rule-config';

/**
 * Disallows calling a function with an any type value.
 *
 * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
 */
export type NoUnsafeArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallows calling a function with an any type value.
 *
 * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
 */
export interface NoUnsafeArgumentRule {
  /**
   * Disallows calling a function with an any type value.
   *
   * @see [no-unsafe-argument](https://typescript-eslint.io/rules/no-unsafe-argument)
   */
  '@typescript-eslint/no-unsafe-argument': NoUnsafeArgumentRuleConfig;
}
