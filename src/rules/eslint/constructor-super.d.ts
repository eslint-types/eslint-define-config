import type { RuleConfig } from '../rule-config';

/**
 * Require `super()` calls in constructors.
 *
 * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
 */
export type ConstructorSuperRuleConfig = RuleConfig<[]>;

/**
 * Require `super()` calls in constructors.
 *
 * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
 */
export interface ConstructorSuperRule {
  /**
   * Require `super()` calls in constructors.
   *
   * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
   */
  'constructor-super': ConstructorSuperRuleConfig;
}
