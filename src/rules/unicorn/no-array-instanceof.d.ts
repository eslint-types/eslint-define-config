import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#no-array-instanceof)
 */
export type NoArrayInstanceofRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#no-array-instanceof)
 */
export interface NoArrayInstanceofRule {
  /**
   *
   * @deprecated
   *
   * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#no-array-instanceof)
   */
  'unicorn/no-array-instanceof': NoArrayInstanceofRuleConfig;
}
