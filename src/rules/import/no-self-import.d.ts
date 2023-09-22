import type { RuleConfig } from '../rule-config';

/**
 * Forbid a module from importing itself.
 *
 * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-self-import.md)
 */
export type NoSelfImportRuleConfig = RuleConfig<[]>;

/**
 * Forbid a module from importing itself.
 *
 * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-self-import.md)
 */
export interface NoSelfImportRule {
  /**
   * Forbid a module from importing itself.
   *
   * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-self-import.md)
   */
  'import/no-self-import': NoSelfImportRuleConfig;
}
