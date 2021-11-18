import type { RuleConfig } from '../rule-config';

/**
 * Prefer `export…from` when re-exporting.
 *
 * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v38.0.1/docs/rules/prefer-export-from.md)
 */
export type PreferExportFromRuleConfig = RuleConfig<[]>;

/**
 * Prefer `export…from` when re-exporting.
 *
 * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v38.0.1/docs/rules/prefer-export-from.md)
 */
export interface PreferExportFromRule {
  /**
   * Prefer `export…from` when re-exporting.
   *
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v38.0.1/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': PreferExportFromRuleConfig;
}
