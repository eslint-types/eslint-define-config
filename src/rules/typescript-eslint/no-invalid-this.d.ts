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
 * Disallow `this` keywords outside of classes or class-like objects.
 *
 * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
 */
export type NoInvalidThisRuleConfig = RuleConfig<NoInvalidThisOptions>;

/**
 * Disallow `this` keywords outside of classes or class-like objects.
 *
 * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
 */
export interface NoInvalidThisRule {
  /**
   * Disallow `this` keywords outside of classes or class-like objects.
   *
   * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
   */
  '@typescript-eslint/no-invalid-this': NoInvalidThisRuleConfig;
}
