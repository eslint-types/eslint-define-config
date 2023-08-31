import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow `then` property.
 *
 * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-thenable.md)
 */
export type NoThenableRuleConfig = RuleConfig<[]>;

/**
 * Disallow `then` property.
 *
 * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-thenable.md)
 */
export interface NoThenableRule {
  /**
   * Disallow `then` property.
   *
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': NoThenableRuleConfig;
}
