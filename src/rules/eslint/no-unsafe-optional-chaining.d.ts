import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnsafeOptionalChainingOption {
  disallowArithmeticOperators?: boolean;
}

/**
 * Options.
 */
export type NoUnsafeOptionalChainingOptions = [NoUnsafeOptionalChainingOption?];

/**
 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
 *
 * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
 */
export type NoUnsafeOptionalChainingRuleConfig =
  RuleConfig<NoUnsafeOptionalChainingOptions>;

/**
 * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
 *
 * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
 */
export interface NoUnsafeOptionalChainingRule {
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
   *
   * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
   */
  'no-unsafe-optional-chaining': NoUnsafeOptionalChainingRuleConfig;
}
