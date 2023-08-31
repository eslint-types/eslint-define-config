import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Forbid named exports.
 *
 * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-export.md)
 */
export type NoNamedExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid named exports.
 *
 * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-export.md)
 */
export interface NoNamedExportRule {
  /**
   * Forbid named exports.
   *
   * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-export.md)
   */
  'import/no-named-export': NoNamedExportRuleConfig;
}
