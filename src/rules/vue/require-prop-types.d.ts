import type { RuleConfig } from '../rule-config';

/**
 * require type definitions in props
 *
 * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
 */
export type RequirePropTypesRuleConfig = RuleConfig<[]>;

/**
 * require type definitions in props
 *
 * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
 */
export interface RequirePropTypesRule {
  /**
   * require type definitions in props
   *
   * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
   */
  'vue/require-prop-types': RequirePropTypesRuleConfig;
}
