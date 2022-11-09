import type { RuleConfig } from '../rule-config';

/**
 * Disallow unsafe declaration merging.
 *
 * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
 */
export type NoUnsafeDeclarationMergingRuleConfig = RuleConfig<[]>;

/**
 * Disallow unsafe declaration merging.
 *
 * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
 */
export interface NoUnsafeDeclarationMergingRule {
  /**
   * Disallow unsafe declaration merging.
   *
   * @see [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)
   */
  '@typescript-eslint/no-unsafe-declaration-merging': NoUnsafeDeclarationMergingRuleConfig;
}
