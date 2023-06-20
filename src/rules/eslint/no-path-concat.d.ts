import type { RuleConfig } from '../rule-config';

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @deprecated
 *
 * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
 */
export type NoPathConcatRuleConfig = RuleConfig<[]>;

/**
 * Disallow string concatenation with `__dirname` and `__filename`.
 *
 * @deprecated
 *
 * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
 */
export interface NoPathConcatRule {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @deprecated
   *
   * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
   */
  'no-path-concat': NoPathConcatRuleConfig;
}
