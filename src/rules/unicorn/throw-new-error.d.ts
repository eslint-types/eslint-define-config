import type { RuleConfig } from '../rule-config';

/**
 * Require `new` when throwing an error.
 *
 * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/throw-new-error.md)
 */
export type ThrowNewErrorRuleConfig = RuleConfig<[]>;

/**
 * Require `new` when throwing an error.
 *
 * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/throw-new-error.md)
 */
export interface ThrowNewErrorRule {
  /**
   * Require `new` when throwing an error.
   *
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': ThrowNewErrorRuleConfig;
}
