import type { RuleConfig } from '../rule-config';

/**
 * Disallow using the `this` argument in array methods.
 *
 * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-method-this-argument.md)
 */
export type NoArrayMethodThisArgumentRuleConfig = RuleConfig<[]>;

/**
 * Disallow using the `this` argument in array methods.
 *
 * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-method-this-argument.md)
 */
export interface NoArrayMethodThisArgumentRule {
  /**
   * Disallow using the `this` argument in array methods.
   *
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': NoArrayMethodThisArgumentRuleConfig;
}
