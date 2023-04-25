import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryActOption {
  isStrict?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoUnnecessaryActOptions = [NoUnnecessaryActOption?];

/**
 * Disallow wrapping Testing Library utils or empty callbacks in `act`.
 *
 * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
 */
export type NoUnnecessaryActRuleConfig = RuleConfig<NoUnnecessaryActOptions>;

/**
 * Disallow wrapping Testing Library utils or empty callbacks in `act`.
 *
 * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
 */
export interface NoUnnecessaryActRule {
  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`.
   *
   * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
   */
  'testing-library/no-unnecessary-act': NoUnnecessaryActRuleConfig;
}
