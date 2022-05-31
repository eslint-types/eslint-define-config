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
 * @deprecated
 *
 * @see [no-duplicate-imports](https://typescript-eslint.io/rules/no-duplicate-imports)
 */
export type NoDuplicateImportsRuleConfig =
  RuleConfig<NoDuplicateImportsOptions>;

/**
 * Disallow duplicate imports.
 *
 * @deprecated
 *
 * @see [no-duplicate-imports](https://typescript-eslint.io/rules/no-duplicate-imports)
 */
export interface NoDuplicateImportsRule {
  /**
   * Disallow duplicate imports.
   *
   * @deprecated
   *
   * @see [no-duplicate-imports](https://typescript-eslint.io/rules/no-duplicate-imports)
   */
  '@typescript-eslint/no-duplicate-imports': NoDuplicateImportsRuleConfig;
}
