import type { RuleConfig } from '../rule-config';

/**
 * Disallow calls to the `Object` constructor without an argument.
 *
 * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
 */
export type NoObjectConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow calls to the `Object` constructor without an argument.
 *
 * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
 */
export interface NoObjectConstructorRule {
  /**
   * Disallow calls to the `Object` constructor without an argument.
   *
   * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
   */
  'no-object-constructor': NoObjectConstructorRuleConfig;
}
