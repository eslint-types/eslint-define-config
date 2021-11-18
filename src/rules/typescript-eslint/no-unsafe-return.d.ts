import type { RuleConfig } from '../rule-config';

/**
 * Disallows returning any from a function.
 *
 * @see [no-unsafe-return](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md)
 */
export type NoUnsafeReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallows returning any from a function.
 *
 * @see [no-unsafe-return](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md)
 */
export interface NoUnsafeReturnRule {
  /**
   * Disallows returning any from a function.
   *
   * @see [no-unsafe-return](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md)
   */
  '@typescript-eslint/no-unsafe-return': NoUnsafeReturnRuleConfig;
}
