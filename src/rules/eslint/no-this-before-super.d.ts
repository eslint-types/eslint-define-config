import type { RuleConfig } from '../rule-config';

/**
 * Disallow `this`/`super` before calling `super()` in constructors.
 *
 * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
 */
export type NoThisBeforeSuperRuleConfig = RuleConfig<[]>;

/**
 * Disallow `this`/`super` before calling `super()` in constructors.
 *
 * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
 */
export interface NoThisBeforeSuperRule {
  /**
   * Disallow `this`/`super` before calling `super()` in constructors.
   *
   * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
   */
  'no-this-before-super': NoThisBeforeSuperRuleConfig;
}
