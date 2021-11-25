import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferObjectHasOwnOption {
  functions?: any[];
}

/**
 * Options.
 */
export type PreferObjectHasOwnOptions = [PreferObjectHasOwnOption?];

/**
 * Prefer `Object.hasOwn(…)` over `Object.prototype.hasOwnProperty.call(…)`.
 *
 * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-object-has-own.md)
 */
export type PreferObjectHasOwnRuleConfig = RuleConfig<PreferObjectHasOwnOptions>;

/**
 * Prefer `Object.hasOwn(…)` over `Object.prototype.hasOwnProperty.call(…)`.
 *
 * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-object-has-own.md)
 */
export interface PreferObjectHasOwnRule {
  /**
   * Prefer `Object.hasOwn(…)` over `Object.prototype.hasOwnProperty.call(…)`.
   *
   * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v39.0.0/docs/rules/prefer-object-has-own.md)
   */
  'unicorn/prefer-object-has-own': PreferObjectHasOwnRuleConfig;
}
