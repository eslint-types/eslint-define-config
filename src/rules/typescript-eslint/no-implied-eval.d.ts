import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
 */
export type NoImpliedEvalRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
 */
export interface NoImpliedEvalRule {
  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @see [no-implied-eval](https://typescript-eslint.io/rules/no-implied-eval)
   */
  '@typescript-eslint/no-implied-eval': NoImpliedEvalRuleConfig;
}
