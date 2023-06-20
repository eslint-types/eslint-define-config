import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEvalOption {
  allowIndirect?: boolean;
}

/**
 * Options.
 */
export type NoEvalOptions = [NoEvalOption?];

/**
 * Disallow the use of `eval()`.
 *
 * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
 */
export type NoEvalRuleConfig = RuleConfig<NoEvalOptions>;

/**
 * Disallow the use of `eval()`.
 *
 * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
 */
export interface NoEvalRule {
  /**
   * Disallow the use of `eval()`.
   *
   * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
   */
  'no-eval': NoEvalRuleConfig;
}
