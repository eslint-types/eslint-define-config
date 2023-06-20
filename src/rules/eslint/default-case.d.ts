import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DefaultCaseOption {
  commentPattern?: string;
}

/**
 * Options.
 */
export type DefaultCaseOptions = [DefaultCaseOption?];

/**
 * Require `default` cases in `switch` statements.
 *
 * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
 */
export type DefaultCaseRuleConfig = RuleConfig<DefaultCaseOptions>;

/**
 * Require `default` cases in `switch` statements.
 *
 * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
 */
export interface DefaultCaseRule {
  /**
   * Require `default` cases in `switch` statements.
   *
   * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
   */
  'default-case': DefaultCaseRuleConfig;
}
