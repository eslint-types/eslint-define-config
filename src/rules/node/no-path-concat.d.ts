import type { RuleConfig } from '../rule-config';

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @see [no-path-concat](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md)
 */
export type NoPathConcatRuleConfig = RuleConfig<[]>;

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @see [no-path-concat](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md)
 */
export interface NoPathConcatRule {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @see [no-path-concat](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md)
   */
  'node/no-path-concat': NoPathConcatRuleConfig;
}
