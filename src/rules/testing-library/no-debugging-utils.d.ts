import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDebuggingUtilsOption {
  utilsToCheckFor?: {
    prettyFormat?: boolean;
    logDOM?: boolean;
    logRoles?: boolean;
    prettyDOM?: boolean;
    logTestingPlaygroundURL?: boolean;
    debug?: boolean;
  };
}

/**
 * Options.
 */
export type NoDebuggingUtilsOptions = [NoDebuggingUtilsOption?];

/**
 * Disallow the use of debugging utilities like `debug`.
 *
 * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
 */
export type NoDebuggingUtilsRuleConfig = RuleConfig<NoDebuggingUtilsOptions>;

/**
 * Disallow the use of debugging utilities like `debug`.
 *
 * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
 */
export interface NoDebuggingUtilsRule {
  /**
   * Disallow the use of debugging utilities like `debug`.
   *
   * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
   */
  'testing-library/no-debugging-utils': NoDebuggingUtilsRuleConfig;
}
