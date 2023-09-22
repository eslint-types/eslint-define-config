import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDynamicRequireOption {
  esmodule?: boolean;
}

/**
 * Options.
 */
export type NoDynamicRequireOptions = [NoDynamicRequireOption?];

/**
 * Forbid `require()` calls with expressions.
 *
 * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-dynamic-require.md)
 */
export type NoDynamicRequireRuleConfig = RuleConfig<NoDynamicRequireOptions>;

/**
 * Forbid `require()` calls with expressions.
 *
 * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-dynamic-require.md)
 */
export interface NoDynamicRequireRule {
  /**
   * Forbid `require()` calls with expressions.
   *
   * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-dynamic-require.md)
   */
  'import/no-dynamic-require': NoDynamicRequireRuleConfig;
}
