import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-implied-eval.md)
 */
export type NoImpliedEvalRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `eval()`-like methods.
 *
 * @see [no-implied-eval](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-implied-eval.md)
 */
export interface NoImpliedEvalRule {
  /**
   * Disallow the use of `eval()`-like methods.
   *
   * @see [no-implied-eval](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-implied-eval.md)
   */
  '@typescript-eslint/no-implied-eval': NoImpliedEvalRuleConfig;
}
