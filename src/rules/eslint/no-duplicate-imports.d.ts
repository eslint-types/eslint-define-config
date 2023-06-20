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
 * Disallow duplicate module imports.
 *
 * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
 */
export type NoDuplicateImportsRuleConfig =
  RuleConfig<NoDuplicateImportsOptions>;

/**
 * Disallow duplicate module imports.
 *
 * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
 */
export interface NoDuplicateImportsRule {
  /**
   * Disallow duplicate module imports.
   *
   * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': NoDuplicateImportsRuleConfig;
}
