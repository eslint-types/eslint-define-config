import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewlineAfterImportOption {
  count?: number;
  considerComments?: boolean;
}

/**
 * Options.
 */
export type NewlineAfterImportOptions = [NewlineAfterImportOption?];

/**
 * Enforce a newline after import statements.
 *
 * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/newline-after-import.md)
 */
export type NewlineAfterImportRuleConfig =
  RuleConfig<NewlineAfterImportOptions>;

/**
 * Enforce a newline after import statements.
 *
 * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/newline-after-import.md)
 */
export interface NewlineAfterImportRule {
  /**
   * Enforce a newline after import statements.
   *
   * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/newline-after-import.md)
   */
  'import/newline-after-import': NewlineAfterImportRuleConfig;
}
