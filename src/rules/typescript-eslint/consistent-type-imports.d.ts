import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTypeImportsOption {
  prefer?: 'type-imports' | 'no-type-imports';
  disallowTypeAnnotations?: boolean;
}

/**
 * Options.
 */
export type ConsistentTypeImportsOptions = [ConsistentTypeImportsOption?];

/**
 * Enforces consistent usage of type imports.
 *
 * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
 */
export type ConsistentTypeImportsRuleConfig =
  RuleConfig<ConsistentTypeImportsOptions>;

/**
 * Enforces consistent usage of type imports.
 *
 * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
 */
export interface ConsistentTypeImportsRule {
  /**
   * Enforces consistent usage of type imports.
   *
   * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
   */
  '@typescript-eslint/consistent-type-imports': ConsistentTypeImportsRuleConfig;
}
