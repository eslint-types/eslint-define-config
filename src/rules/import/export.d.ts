import type { RuleConfig } from '../rule-config';

/**
 * Forbid any invalid exports, i.e. re-export of the same name.
 *
 * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/export.md)
 */
export type ExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid any invalid exports, i.e. re-export of the same name.
 *
 * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/export.md)
 */
export interface ExportRule {
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/export.md)
   */
  'import/export': ExportRuleConfig;
}
