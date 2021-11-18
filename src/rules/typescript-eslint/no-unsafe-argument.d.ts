import type { RuleConfig } from '../rule-config';

/**
 * Disallows calling a function with an any type value.
 *
 * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
 */
export type NoUnsafeArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallows calling a function with an any type value.
 *
 * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
 */
export interface NoUnsafeArgumentRule {
  /**
   * Disallows calling a function with an any type value.
   *
   * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
   */
  '@typescript-eslint/no-unsafe-argument': NoUnsafeArgumentRuleConfig;
}
