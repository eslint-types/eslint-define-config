import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTypeExportsOption {
  fixMixedExportsWithInlineTypeSpecifier?: boolean;
}

/**
 * Options.
 */
export type ConsistentTypeExportsOptions = [ConsistentTypeExportsOption?];

/**
 * Enforces consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
 */
export type ConsistentTypeExportsRuleConfig = RuleConfig<ConsistentTypeExportsOptions>;

/**
 * Enforces consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
 */
export interface ConsistentTypeExportsRule {
  /**
   * Enforces consistent usage of type exports.
   *
   * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.8.1/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
   */
  '@typescript-eslint/consistent-type-exports': ConsistentTypeExportsRuleConfig;
}
