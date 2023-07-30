import type { RuleConfig } from '../rule-config';

/**
 * Require escape sequences to use uppercase values.
 *
 * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/escape-case.md)
 */
export type EscapeCaseRuleConfig = RuleConfig<[]>;

/**
 * Require escape sequences to use uppercase values.
 *
 * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/escape-case.md)
 */
export interface EscapeCaseRule {
  /**
   * Require escape sequences to use uppercase values.
   *
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': EscapeCaseRuleConfig;
}
