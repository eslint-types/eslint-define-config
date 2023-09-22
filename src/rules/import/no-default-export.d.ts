import type { RuleConfig } from '../rule-config';

/**
 * Forbid default exports.
 *
 * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-default-export.md)
 */
export type NoDefaultExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid default exports.
 *
 * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-default-export.md)
 */
export interface NoDefaultExportRule {
  /**
   * Forbid default exports.
   *
   * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-default-export.md)
   */
  'import/no-default-export': NoDefaultExportRuleConfig;
}
