import type { RuleConfig } from '../rule-config';

/**
 * Use `waitFor` instead of deprecated wait methods.
 *
 * @see [prefer-wait-for](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-wait-for.md)
 */
export type PreferWaitForRuleConfig = RuleConfig<[]>;

/**
 * Use `waitFor` instead of deprecated wait methods.
 *
 * @see [prefer-wait-for](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-wait-for.md)
 */
export interface PreferWaitForRule {
  /**
   * Use `waitFor` instead of deprecated wait methods.
   *
   * @see [prefer-wait-for](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-wait-for.md)
   */
  'testing-library/prefer-wait-for': PreferWaitForRuleConfig;
}
