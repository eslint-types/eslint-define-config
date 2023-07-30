import type { RuleConfig } from '../rule-config';

/**
 * Prefer negative index over `.length - index` when possible.
 *
 * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-negative-index.md)
 */
export type PreferNegativeIndexRuleConfig = RuleConfig<[]>;

/**
 * Prefer negative index over `.length - index` when possible.
 *
 * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-negative-index.md)
 */
export interface PreferNegativeIndexRule {
  /**
   * Prefer negative index over `.length - index` when possible.
   *
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': PreferNegativeIndexRuleConfig;
}
