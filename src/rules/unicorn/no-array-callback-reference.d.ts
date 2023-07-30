import type { RuleConfig } from '../rule-config';

/**
 * Prevent passing a function reference directly to iterator methods.
 *
 * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-callback-reference.md)
 */
export type NoArrayCallbackReferenceRuleConfig = RuleConfig<[]>;

/**
 * Prevent passing a function reference directly to iterator methods.
 *
 * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-callback-reference.md)
 */
export interface NoArrayCallbackReferenceRule {
  /**
   * Prevent passing a function reference directly to iterator methods.
   *
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': NoArrayCallbackReferenceRuleConfig;
}
