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
 *
 * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-dynamic-require.md)
 */
export type NoDynamicRequireRuleConfig = RuleConfig<NoDynamicRequireOptions>;

/**
 *
 * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-dynamic-require.md)
 */
export interface NoDynamicRequireRule {
  /**
   *
   * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-dynamic-require.md)
   */
  'import/no-dynamic-require': NoDynamicRequireRuleConfig;
}
