import type { RuleConfig } from '../rule-config';

/**
 * Disallows invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export type NoRequireImportsRuleConfig = RuleConfig<[]>;

/**
 * Disallows invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export interface NoRequireImportsRule {
  /**
   * Disallows invocation of `require()`.
   *
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  '@typescript-eslint/no-require-imports': NoRequireImportsRuleConfig;
}
