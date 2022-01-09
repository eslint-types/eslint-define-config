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
 * Enforce or disallow the use of the record type.
 *
 * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
 */
export type ConsistentIndexedObjectStyleRuleConfig =
  RuleConfig<ConsistentIndexedObjectStyleOptions>;

/**
 * Enforce or disallow the use of the record type.
 *
 * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
 */
export interface ConsistentIndexedObjectStyleRule {
  /**
   * Enforce or disallow the use of the record type.
   *
   * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
   */
  '@typescript-eslint/consistent-indexed-object-style': ConsistentIndexedObjectStyleRuleConfig;
}
