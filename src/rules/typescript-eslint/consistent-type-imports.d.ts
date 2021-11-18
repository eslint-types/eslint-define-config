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
 * @see [consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md)
 */
export type ConsistentTypeImportsRuleConfig = RuleConfig<ConsistentTypeImportsOptions>;

/**
 * Enforces consistent usage of type imports.
 *
 * @see [consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md)
 */
export interface ConsistentTypeImportsRule {
  /**
   * Enforces consistent usage of type imports.
   *
   * @see [consistent-type-imports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md)
   */
  '@typescript-eslint/consistent-type-imports': ConsistentTypeImportsRuleConfig;
}
