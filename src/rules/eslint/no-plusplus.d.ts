import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoPlusplusOption {
  allowForLoopAfterthoughts?: boolean;
}

/**
 * Options.
 */
export type NoPlusplusOptions = [NoPlusplusOption?];

/**
 * Disallow the unary operators `++` and `--`.
 *
 * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
 */
export type NoPlusplusRuleConfig = RuleConfig<NoPlusplusOptions>;

/**
 * Disallow the unary operators `++` and `--`.
 *
 * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
 */
export interface NoPlusplusRule {
  /**
   * Disallow the unary operators `++` and `--`.
   *
   * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
   */
  'no-plusplus': NoPlusplusRuleConfig;
}
