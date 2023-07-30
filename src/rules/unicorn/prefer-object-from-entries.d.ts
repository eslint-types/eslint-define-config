import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferObjectFromEntriesOption {
  functions?: any[];
}

/**
 * Options.
 */
export type PreferObjectFromEntriesOptions = [PreferObjectFromEntriesOption?];

/**
 * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
 *
 * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-object-from-entries.md)
 */
export type PreferObjectFromEntriesRuleConfig =
  RuleConfig<PreferObjectFromEntriesOptions>;

/**
 * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
 *
 * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-object-from-entries.md)
 */
export interface PreferObjectFromEntriesRule {
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   *
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': PreferObjectFromEntriesRuleConfig;
}
