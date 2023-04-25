import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNodeAccessOption {
  allowContainerFirstChild?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoNodeAccessOptions = [NoNodeAccessOption?];

/**
 * Disallow direct Node access.
 *
 * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
 */
export type NoNodeAccessRuleConfig = RuleConfig<NoNodeAccessOptions>;

/**
 * Disallow direct Node access.
 *
 * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
 */
export interface NoNodeAccessRule {
  /**
   * Disallow direct Node access.
   *
   * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
   */
  'testing-library/no-node-access': NoNodeAccessRuleConfig;
}
