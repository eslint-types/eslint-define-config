import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNullOption {
  checkStrictEquality?: boolean;
}

/**
 * Options.
 */
export type NoNullOptions = [NoNullOption?];

/**
 * Disallow the use of the `null` literal.
 *
 * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md)
 */
export type NoNullRuleConfig = RuleConfig<NoNullOptions>;

/**
 * Disallow the use of the `null` literal.
 *
 * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md)
 */
export interface NoNullRule {
  /**
   * Disallow the use of the `null` literal.
   *
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-null.md)
   */
  'unicorn/no-null': NoNullRuleConfig;
}
