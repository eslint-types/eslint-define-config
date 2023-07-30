import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.
 *
 * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-includes.md)
 */
export type PreferIncludesRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.
 *
 * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-includes.md)
 */
export interface PreferIncludesRule {
  /**
   * Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence.
   *
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': PreferIncludesRuleConfig;
}
