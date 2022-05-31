import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentIndexedObjectStyleOption = 'record' | 'index-signature';

/**
 * Options.
 */
export type ConsistentIndexedObjectStyleOptions = [
  ConsistentIndexedObjectStyleOption?,
];

/**
 * Require or disallow the `Record` type.
 *
 * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
 */
export type ConsistentIndexedObjectStyleRuleConfig =
  RuleConfig<ConsistentIndexedObjectStyleOptions>;

/**
 * Require or disallow the `Record` type.
 *
 * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
 */
export interface ConsistentIndexedObjectStyleRule {
  /**
   * Require or disallow the `Record` type.
   *
   * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
   */
  '@typescript-eslint/consistent-indexed-object-style': ConsistentIndexedObjectStyleRuleConfig;
}
