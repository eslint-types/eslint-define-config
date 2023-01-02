import type { RuleConfig } from '../rule-config';

/**
 * Disallow awaiting non-promise values.
 *
 * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unnecessary-await.md)
 */
export type NoUnnecessaryAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow awaiting non-promise values.
 *
 * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unnecessary-await.md)
 */
export interface NoUnnecessaryAwaitRule {
  /**
   * Disallow awaiting non-promise values.
   *
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': NoUnnecessaryAwaitRuleConfig;
}
