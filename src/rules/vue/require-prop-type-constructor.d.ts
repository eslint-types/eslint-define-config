import type { RuleConfig } from '../rule-config';

/**
 * require prop type to be a constructor
 *
 * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
 */
export type RequirePropTypeConstructorRuleConfig = RuleConfig<[]>;

/**
 * require prop type to be a constructor
 *
 * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
 */
export interface RequirePropTypeConstructorRule {
  /**
   * require prop type to be a constructor
   *
   * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
   */
  'vue/require-prop-type-constructor': RequirePropTypeConstructorRuleConfig;
}
