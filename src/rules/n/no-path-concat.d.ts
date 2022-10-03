import type { RuleConfig } from '../rule-config';

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @see [no-path-concat](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-path-concat.md)
 */
export type NoPathConcatRuleConfig = RuleConfig<[]>;

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @see [no-path-concat](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-path-concat.md)
 */
export interface NoPathConcatRule {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @see [no-path-concat](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-path-concat.md)
   */
  'n/no-path-concat': NoPathConcatRuleConfig;
}
