import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Forbid AMD `require` and `define` calls.
 *
 * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-amd.md)
 */
export type NoAmdRuleConfig = RuleConfig<[]>;

/**
 * Forbid AMD `require` and `define` calls.
 *
 * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-amd.md)
 */
export interface NoAmdRule {
  /**
   * Forbid AMD `require` and `define` calls.
   *
   * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-amd.md)
   */
  'import/no-amd': NoAmdRuleConfig;
}
