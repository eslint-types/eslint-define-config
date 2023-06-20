import type { RuleConfig } from '../rule-config';

/**
 * Disallow returning values from setters.
 *
 * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
 */
export type NoSetterReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallow returning values from setters.
 *
 * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
 */
export interface NoSetterReturnRule {
  /**
   * Disallow returning values from setters.
   *
   * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
   */
  'no-setter-return': NoSetterReturnRuleConfig;
}
