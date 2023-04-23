import type { RuleConfig } from '../rule-config';

/**
 * Disallow conditional expects.
 *
 * @see [no-conditional-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
 */
export type NoConditionalExpectRuleConfig = RuleConfig<[]>;

/**
 * Disallow conditional expects.
 *
 * @see [no-conditional-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
 */
export interface NoConditionalExpectRule {
  /**
   * Disallow conditional expects.
   *
   * @see [no-conditional-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
   */
  'vitest/no-conditional-expect': NoConditionalExpectRuleConfig;
}
