import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnassignedImportOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  allow?: string[];
}

/**
 * Options.
 */
export type NoUnassignedImportOptions = [NoUnassignedImportOption?];

/**
 * Forbid unassigned imports.
 *
 * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unassigned-import.md)
 */
export type NoUnassignedImportRuleConfig =
  RuleConfig<NoUnassignedImportOptions>;

/**
 * Forbid unassigned imports.
 *
 * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unassigned-import.md)
 */
export interface NoUnassignedImportRule {
  /**
   * Forbid unassigned imports.
   *
   * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-unassigned-import.md)
   */
  'import/no-unassigned-import': NoUnassignedImportRuleConfig;
}
