import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDomImportOption = string;

/**
 * Options.
 */
export type NoDomImportOptions = [NoDomImportOption?];

/**
 * Disallow importing from DOM Testing Library.
 *
 * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
 */
export type NoDomImportRuleConfig = RuleConfig<NoDomImportOptions>;

/**
 * Disallow importing from DOM Testing Library.
 *
 * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
 */
export interface NoDomImportRule {
  /**
   * Disallow importing from DOM Testing Library.
   *
   * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
   */
  'testing-library/no-dom-import': NoDomImportRuleConfig;
}
