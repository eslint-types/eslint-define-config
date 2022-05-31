import type { RuleConfig } from '../rule-config';

/**
 * Disallow invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export type NoRequireImportsRuleConfig = RuleConfig<[]>;

/**
 * Disallow invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export interface NoRequireImportsRule {
  /**
   * Disallow invocation of `require()`.
   *
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  '@typescript-eslint/no-require-imports': NoRequireImportsRuleConfig;
}
