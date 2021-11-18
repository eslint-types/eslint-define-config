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
 * @see [no-invalid-this](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-this.md)
 */
export type NoInvalidThisRuleConfig = RuleConfig<NoInvalidThisOptions>;

/**
 * Disallow `this` keywords outside of classes or class-like objects.
 *
 * @see [no-invalid-this](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-this.md)
 */
export interface NoInvalidThisRule {
  /**
   * Disallow `this` keywords outside of classes or class-like objects.
   *
   * @see [no-invalid-this](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-invalid-this.md)
   */
  '@typescript-eslint/no-invalid-this': NoInvalidThisRuleConfig;
}
