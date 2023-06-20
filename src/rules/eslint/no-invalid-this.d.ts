import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoInvalidThisOption {
  capIsConstructor?: boolean;
}

/**
 * Options.
 */
export type NoInvalidThisOptions = [NoInvalidThisOption?];

/**
 * Disallow use of `this` in contexts where the value of `this` is `undefined`.
 *
 * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
 */
export type NoInvalidThisRuleConfig = RuleConfig<NoInvalidThisOptions>;

/**
 * Disallow use of `this` in contexts where the value of `this` is `undefined`.
 *
 * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
 */
export interface NoInvalidThisRule {
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   *
   * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
   */
  'no-invalid-this': NoInvalidThisRuleConfig;
}
