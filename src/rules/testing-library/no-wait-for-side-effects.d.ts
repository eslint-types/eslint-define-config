import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of side effects in `waitFor`.
 *
 * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
 */
export type NoWaitForSideEffectsRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of side effects in `waitFor`.
 *
 * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
 */
export interface NoWaitForSideEffectsRule {
  /**
   * Disallow the use of side effects in `waitFor`.
   *
   * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
   */
  'testing-library/no-wait-for-side-effects': NoWaitForSideEffectsRuleConfig;
}
