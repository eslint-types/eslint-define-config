import type { RuleConfig } from '../rule-config';

/**
 * Prefer top-level await over top-level promises and async function calls.
 *
 * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-top-level-await.md)
 */
export type PreferTopLevelAwaitRuleConfig = RuleConfig<[]>;

/**
 * Prefer top-level await over top-level promises and async function calls.
 *
 * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-top-level-await.md)
 */
export interface PreferTopLevelAwaitRule {
  /**
   * Prefer top-level await over top-level promises and async function calls.
   *
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': PreferTopLevelAwaitRuleConfig;
}
