import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicateImportsOption {
  includeExports?: boolean;
}

/**
 * Options.
 */
export type NoDuplicateImportsOptions = [NoDuplicateImportsOption?];

/**
 * Disallow duplicate imports.
 *
 * @see [no-duplicate-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)
 */
export type NoDuplicateImportsRuleConfig = RuleConfig<NoDuplicateImportsOptions>;

/**
 * Disallow duplicate imports.
 *
 * @see [no-duplicate-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)
 */
export interface NoDuplicateImportsRule {
  /**
   * Disallow duplicate imports.
   *
   * @see [no-duplicate-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-duplicate-imports.md)
   */
  '@typescript-eslint/no-duplicate-imports': NoDuplicateImportsRuleConfig;
}
