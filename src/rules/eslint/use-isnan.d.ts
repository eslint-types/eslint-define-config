import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface UseIsnanOption {
  enforceForSwitchCase?: boolean;
  enforceForIndexOf?: boolean;
}

/**
 * Options.
 */
export type UseIsnanOptions = [UseIsnanOption?];

/**
 * Require calls to `isNaN()` when checking for `NaN`.
 *
 * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
 */
export type UseIsnanRuleConfig = RuleConfig<UseIsnanOptions>;

/**
 * Require calls to `isNaN()` when checking for `NaN`.
 *
 * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
 */
export interface UseIsnanRule {
  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   *
   * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
   */
  'use-isnan': UseIsnanRuleConfig;
}
