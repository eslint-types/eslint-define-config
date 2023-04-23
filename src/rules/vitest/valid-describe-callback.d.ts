import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid describe callback.
 *
 * @see [valid-describe-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
 */
export type ValidDescribeCallbackRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid describe callback.
 *
 * @see [valid-describe-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
 */
export interface ValidDescribeCallbackRule {
  /**
   * Enforce valid describe callback.
   *
   * @see [valid-describe-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
   */
  'vitest/valid-describe-callback': ValidDescribeCallbackRuleConfig;
}
