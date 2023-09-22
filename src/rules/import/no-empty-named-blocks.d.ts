import type { RuleConfig } from '../rule-config';

/**
 * Forbid empty named import blocks.
 *
 * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-empty-named-blocks.md)
 */
export type NoEmptyNamedBlocksRuleConfig = RuleConfig<[]>;

/**
 * Forbid empty named import blocks.
 *
 * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-empty-named-blocks.md)
 */
export interface NoEmptyNamedBlocksRule {
  /**
   * Forbid empty named import blocks.
   *
   * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-empty-named-blocks.md)
   */
  'import/no-empty-named-blocks': NoEmptyNamedBlocksRuleConfig;
}
