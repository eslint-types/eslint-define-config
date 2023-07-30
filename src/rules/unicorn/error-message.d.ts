import type { RuleConfig } from '../rule-config';

/**
 * Enforce passing a `message` value when creating a built-in error.
 *
 * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/error-message.md)
 */
export type ErrorMessageRuleConfig = RuleConfig<[]>;

/**
 * Enforce passing a `message` value when creating a built-in error.
 *
 * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/error-message.md)
 */
export interface ErrorMessageRule {
  /**
   * Enforce passing a `message` value when creating a built-in error.
   *
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/error-message.md)
   */
  'unicorn/error-message': ErrorMessageRuleConfig;
}
