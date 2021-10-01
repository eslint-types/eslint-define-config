import type { RuleConfig } from '../rule-config';

/**
 * Disallows calling an function with an any type value.
 *
 * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
 */
export type NoUnsafeArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallows calling an function with an any type value.
 *
 * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
 */
export interface NoUnsafeArgumentRule {
  /**
   * Disallows calling an function with an any type value.
   *
   * @see [no-unsafe-argument](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-unsafe-argument.md)
   */
  '@typescript-eslint/no-unsafe-argument': NoUnsafeArgumentRuleConfig;
}
