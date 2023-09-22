import type { RuleConfig } from '../rule-config';

/**
 * Forbid the use of mutable exports with `var` or `let`.
 *
 * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-mutable-exports.md)
 */
export type NoMutableExportsRuleConfig = RuleConfig<[]>;

/**
 * Forbid the use of mutable exports with `var` or `let`.
 *
 * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-mutable-exports.md)
 */
export interface NoMutableExportsRule {
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   *
   * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-mutable-exports.md)
   */
  'import/no-mutable-exports': NoMutableExportsRuleConfig;
}
