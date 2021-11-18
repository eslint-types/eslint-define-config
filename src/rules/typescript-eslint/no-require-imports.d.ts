import type { RuleConfig } from '../rule-config';

/**
 * Disallows invocation of `require()`.
 *
 * @see [no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-require-imports.md)
 */
export type NoRequireImportsRuleConfig = RuleConfig<[]>;

/**
 * Disallows invocation of `require()`.
 *
 * @see [no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-require-imports.md)
 */
export interface NoRequireImportsRule {
  /**
   * Disallows invocation of `require()`.
   *
   * @see [no-require-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-require-imports.md)
   */
  '@typescript-eslint/no-require-imports': NoRequireImportsRuleConfig;
}
