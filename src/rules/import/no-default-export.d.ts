import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-default-export.md)
 */
export type NoDefaultExportRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-default-export.md)
 */
export interface NoDefaultExportRule {
  /**
   *
   * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/no-default-export.md)
   */
  'import/no-default-export': NoDefaultExportRuleConfig;
}
