import type { RuleConfig } from '../rule-config';

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)
 */
export type NoSparseArraysRuleConfig = RuleConfig<[]>;

/**
 * Disallow sparse arrays.
 *
 * @see [no-sparse-arrays](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)
 */
export interface NoSparseArraysRule {
  /**
   * Disallow sparse arrays.
   *
   * @see [no-sparse-arrays](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)
   */
  'jsonc/no-sparse-arrays': NoSparseArraysRuleConfig;
}
