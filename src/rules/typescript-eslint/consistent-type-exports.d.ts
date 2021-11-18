import type { RuleConfig } from '../rule-config';

/**
 * Enforces consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
 */
export type ConsistentTypeExportsRuleConfig = RuleConfig<[]>;

/**
 * Enforces consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
 */
export interface ConsistentTypeExportsRule {
  /**
   * Enforces consistent usage of type exports.
   *
   * @see [consistent-type-exports](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-type-exports.md)
   */
  '@typescript-eslint/consistent-type-exports': ConsistentTypeExportsRuleConfig;
}
