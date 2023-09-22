import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeSpecifierStyleOption =
  | 'prefer-inline'
  | 'prefer-top-level';

/**
 * Options.
 */
export type ConsistentTypeSpecifierStyleOptions = [
  ConsistentTypeSpecifierStyleOption?,
];

/**
 * Enforce or ban the use of inline type-only markers for named imports.
 *
 * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/consistent-type-specifier-style.md)
 */
export type ConsistentTypeSpecifierStyleRuleConfig =
  RuleConfig<ConsistentTypeSpecifierStyleOptions>;

/**
 * Enforce or ban the use of inline type-only markers for named imports.
 *
 * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/consistent-type-specifier-style.md)
 */
export interface ConsistentTypeSpecifierStyleRule {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/consistent-type-specifier-style.md)
   */
  'import/consistent-type-specifier-style': ConsistentTypeSpecifierStyleRuleConfig;
}
