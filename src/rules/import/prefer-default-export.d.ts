import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md)
 */
export type PreferDefaultExportRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md)
 */
export interface PreferDefaultExportRule {
  /**
   *
   * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md)
   */
  'import/prefer-default-export': PreferDefaultExportRuleConfig;
}
