import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/export.md)
 */
export type ExportRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/export.md)
 */
export interface ExportRule {
  /**
   *
   * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/export.md)
   */
  'import/export': ExportRuleConfig;
}
