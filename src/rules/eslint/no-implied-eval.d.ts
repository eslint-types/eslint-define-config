import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
 */
export type NoImpliedEvalRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
 */
export interface NoImpliedEvalRule {
  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
   */
  'no-implied-eval': NoImpliedEvalRuleConfig;
}
