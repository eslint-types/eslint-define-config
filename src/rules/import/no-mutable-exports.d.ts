import type { RuleConfig } from '../rule-config';

/**
 *
 *
 * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-mutable-exports.md)
 */
export type NoMutableExportsRuleConfig = RuleConfig<[]>;

/**
 *
 *
 * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-mutable-exports.md)
 */
export interface NoMutableExportsRule {
  /**
   *
   *
   * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.25.4/docs/rules/no-mutable-exports.md)
   */
  'import/no-mutable-exports': NoMutableExportsRuleConfig;
}
