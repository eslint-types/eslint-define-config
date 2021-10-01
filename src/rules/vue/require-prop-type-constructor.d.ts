import type { RuleConfig } from '../rule-config';

/**
 * Require prop type to be a constructor.
 *
 * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
 */
export type RequirePropTypeConstructorRuleConfig = RuleConfig<[]>;

/**
 * Require prop type to be a constructor.
 *
 * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
 */
export interface RequirePropTypeConstructorRule {
  /**
   * Require prop type to be a constructor.
   *
   * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
   */
  'vue/require-prop-type-constructor': RequirePropTypeConstructorRuleConfig;
}
