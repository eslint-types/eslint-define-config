import type { RuleConfig } from '../rule-config';

/**
 * Disallow `then` property.
 *
 * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-thenable.md)
 */
export type NoThenableRuleConfig = RuleConfig<[]>;

/**
 * Disallow `then` property.
 *
 * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-thenable.md)
 */
export interface NoThenableRule {
  /**
   * Disallow `then` property.
   *
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': NoThenableRuleConfig;
}
