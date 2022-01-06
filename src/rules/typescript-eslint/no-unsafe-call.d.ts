import type { RuleConfig } from '../rule-config';

/**
 * Disallows calling an any type value.
 *
 * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
 */
export type NoUnsafeCallRuleConfig = RuleConfig<[]>;

/**
 * Disallows calling an any type value.
 *
 * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
 */
export interface NoUnsafeCallRule {
  /**
   * Disallows calling an any type value.
   *
   * @see [no-unsafe-call](https://typescript-eslint.io/rules/no-unsafe-call)
   */
  '@typescript-eslint/no-unsafe-call': NoUnsafeCallRuleConfig;
}
