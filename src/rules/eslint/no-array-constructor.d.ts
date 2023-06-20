import type { RuleConfig } from '../rule-config';

/**
 * Disallow `Array` constructors.
 *
 * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
 */
export type NoArrayConstructorRuleConfig = RuleConfig<[]>;

/**
 * Disallow `Array` constructors.
 *
 * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
 */
export interface NoArrayConstructorRule {
  /**
   * Disallow `Array` constructors.
   *
   * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
   */
  'no-array-constructor': NoArrayConstructorRuleConfig;
}
