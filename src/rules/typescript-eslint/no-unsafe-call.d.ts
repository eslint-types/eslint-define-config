import type { RuleConfig } from '../rule-config';

/**
 * Disallows calling an any type value.
 *
 * @see [no-unsafe-call](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md)
 */
export type NoUnsafeCallRuleConfig = RuleConfig<[]>;

/**
 * Disallows calling an any type value.
 *
 * @see [no-unsafe-call](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md)
 */
export interface NoUnsafeCallRule {
  /**
   * Disallows calling an any type value.
   *
   * @see [no-unsafe-call](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md)
   */
  '@typescript-eslint/no-unsafe-call': NoUnsafeCallRuleConfig;
}
