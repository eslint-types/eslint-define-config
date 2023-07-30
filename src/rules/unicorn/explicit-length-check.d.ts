import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ExplicitLengthCheckOption {
  'non-zero'?: 'greater-than' | 'not-equal';
}

/**
 * Options.
 */
export type ExplicitLengthCheckOptions = [ExplicitLengthCheckOption?];

/**
 * Enforce explicitly comparing the `length` or `size` property of a value.
 *
 * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/explicit-length-check.md)
 */
export type ExplicitLengthCheckRuleConfig =
  RuleConfig<ExplicitLengthCheckOptions>;

/**
 * Enforce explicitly comparing the `length` or `size` property of a value.
 *
 * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/explicit-length-check.md)
 */
export interface ExplicitLengthCheckRule {
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   *
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': ExplicitLengthCheckRuleConfig;
}
