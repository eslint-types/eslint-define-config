import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTypeImportsOption {
  prefer?: 'type-imports' | 'no-type-imports';
  disallowTypeAnnotations?: boolean;
  fixStyle?: 'separate-type-imports' | 'inline-type-imports';
}

/**
 * Options.
 */
export type ConsistentTypeImportsOptions = [ConsistentTypeImportsOption?];

/**
 * Enforce consistent usage of type imports.
 *
 * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
 */
export type ConsistentTypeImportsRuleConfig =
  RuleConfig<ConsistentTypeImportsOptions>;

/**
 * Enforce consistent usage of type imports.
 *
 * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
 */
export interface ConsistentTypeImportsRule {
  /**
   * Enforce consistent usage of type imports.
   *
   * @see [consistent-type-imports](https://typescript-eslint.io/rules/consistent-type-imports)
   */
  '@typescript-eslint/consistent-type-imports': ConsistentTypeImportsRuleConfig;
}
