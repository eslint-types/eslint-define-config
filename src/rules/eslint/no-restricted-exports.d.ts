import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRestrictedExportsOption {
  restrictedNamedExports?: string[];
}

/**
 * Options.
 */
export type NoRestrictedExportsOptions = [NoRestrictedExportsOption?];

/**
 * Disallow specified names in exports.
 *
 * @see [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
 */
export type NoRestrictedExportsRuleConfig =
  RuleConfig<NoRestrictedExportsOptions>;

/**
 * Disallow specified names in exports.
 *
 * @see [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
 */
export interface NoRestrictedExportsRule {
  /**
   * Disallow specified names in exports.
   *
   * @see [no-restricted-exports](https://eslint.org/docs/rules/no-restricted-exports)
   */
  'no-restricted-exports': NoRestrictedExportsRuleConfig;
}
