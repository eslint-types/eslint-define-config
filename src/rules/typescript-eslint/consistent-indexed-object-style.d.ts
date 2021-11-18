import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentIndexedObjectStyleOption = 'record' | 'index-signature';

/**
 * Options.
 */
export type ConsistentIndexedObjectStyleOptions = [ConsistentIndexedObjectStyleOption?];

/**
 * Enforce or disallow the use of the record type.
 *
 * @see [consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)
 */
export type ConsistentIndexedObjectStyleRuleConfig = RuleConfig<ConsistentIndexedObjectStyleOptions>;

/**
 * Enforce or disallow the use of the record type.
 *
 * @see [consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)
 */
export interface ConsistentIndexedObjectStyleRule {
  /**
   * Enforce or disallow the use of the record type.
   *
   * @see [consistent-indexed-object-style](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md)
   */
  '@typescript-eslint/consistent-indexed-object-style': ConsistentIndexedObjectStyleRuleConfig;
}
