import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferExportFromOption {
  ignoreUsedVariables?: boolean;
}

/**
 * Options.
 */
export type PreferExportFromOptions = [PreferExportFromOption?];

/**
 * Prefer `export…from` when re-exporting.
 *
 * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-export-from.md)
 */
export type PreferExportFromRuleConfig = RuleConfig<PreferExportFromOptions>;

/**
 * Prefer `export…from` when re-exporting.
 *
 * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-export-from.md)
 */
export interface PreferExportFromRule {
  /**
   * Prefer `export…from` when re-exporting.
   *
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': PreferExportFromRuleConfig;
}
