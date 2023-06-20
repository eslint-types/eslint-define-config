import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedExportsOption =
  | {
      restrictedNamedExports?: string[];
    }
  | {
      restrictedNamedExports?: string[];
      restrictDefaultExports?: {
        direct?: boolean;
        named?: boolean;
        defaultFrom?: boolean;
        namedFrom?: boolean;
        namespaceFrom?: boolean;
      };
    };

/**
 * Options.
 */
export type NoRestrictedExportsOptions = [NoRestrictedExportsOption?];

/**
 * Disallow specified names in exports.
 *
 * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
 */
export type NoRestrictedExportsRuleConfig =
  RuleConfig<NoRestrictedExportsOptions>;

/**
 * Disallow specified names in exports.
 *
 * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
 */
export interface NoRestrictedExportsRule {
  /**
   * Disallow specified names in exports.
   *
   * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
   */
  'no-restricted-exports': NoRestrictedExportsRuleConfig;
}
