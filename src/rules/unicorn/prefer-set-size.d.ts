import type { RuleConfig } from '../rule-config';

/**
 * Prefer using `Set#size` instead of `Array#length`.
 *
 * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-set-size.md)
 */
export type PreferSetSizeRuleConfig = RuleConfig<[]>;

/**
 * Prefer using `Set#size` instead of `Array#length`.
 *
 * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-set-size.md)
 */
export interface PreferSetSizeRule {
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   *
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': PreferSetSizeRuleConfig;
}
