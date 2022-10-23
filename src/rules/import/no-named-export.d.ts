import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-export.md)
 */
export type NoNamedExportRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-export.md)
 */
export interface NoNamedExportRule {
  /**
   *
   * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-named-export.md)
   */
  'import/no-named-export': NoNamedExportRuleConfig;
}
