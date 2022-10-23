import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewlineAfterImportOption {
  count?: number;
}

/**
 * Options.
 */
export type NewlineAfterImportOptions = [NewlineAfterImportOption?];

/**
 *
 * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/newline-after-import.md)
 */
export type NewlineAfterImportRuleConfig =
  RuleConfig<NewlineAfterImportOptions>;

/**
 *
 * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/newline-after-import.md)
 */
export interface NewlineAfterImportRule {
  /**
   *
   * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/newline-after-import.md)
   */
  'import/newline-after-import': NewlineAfterImportRuleConfig;
}
