import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `container` methods.
 *
 * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
 */
export type NoContainerRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `container` methods.
 *
 * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
 */
export interface NoContainerRule {
  /**
   * Disallow the use of `container` methods.
   *
   * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
   */
  'testing-library/no-container': NoContainerRuleConfig;
}
