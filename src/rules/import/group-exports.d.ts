import type { RuleConfig } from '../rule-config';

/**
 * Prefer named exports to be grouped together in a single export declaration.
 *
 * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/group-exports.md)
 */
export type GroupExportsRuleConfig = RuleConfig<[]>;

/**
 * Prefer named exports to be grouped together in a single export declaration.
 *
 * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/group-exports.md)
 */
export interface GroupExportsRule {
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   *
   * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/group-exports.md)
   */
  'import/group-exports': GroupExportsRuleConfig;
}
