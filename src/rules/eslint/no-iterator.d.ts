import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of the `__iterator__` property.
 *
 * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
 */
export type NoIteratorRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of the `__iterator__` property.
 *
 * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
 */
export interface NoIteratorRule {
  /**
   * Disallow the use of the `__iterator__` property.
   *
   * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
   */
  'no-iterator': NoIteratorRuleConfig;
}
