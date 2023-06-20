import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferPromiseRejectErrorsOption {
  allowEmptyReject?: boolean;
}

/**
 * Options.
 */
export type PreferPromiseRejectErrorsOptions = [
  PreferPromiseRejectErrorsOption?,
];

/**
 * Require using Error objects as Promise rejection reasons.
 *
 * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
 */
export type PreferPromiseRejectErrorsRuleConfig =
  RuleConfig<PreferPromiseRejectErrorsOptions>;

/**
 * Require using Error objects as Promise rejection reasons.
 *
 * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
 */
export interface PreferPromiseRejectErrorsRule {
  /**
   * Require using Error objects as Promise rejection reasons.
   *
   * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
   */
  'prefer-promise-reject-errors': PreferPromiseRejectErrorsRuleConfig;
}
