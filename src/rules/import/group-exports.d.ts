import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/group-exports.md)
 */
export type GroupExportsRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/group-exports.md)
 */
export interface GroupExportsRule {
  /**
   *
   * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/group-exports.md)
   */
  'import/group-exports': GroupExportsRuleConfig;
}
