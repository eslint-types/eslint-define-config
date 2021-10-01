import type { RuleConfig } from '../rule-config';

/**
 * Require type definitions in props.
 *
 * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
 */
export type RequirePropTypesRuleConfig = RuleConfig<[]>;

/**
 * Require type definitions in props.
 *
 * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
 */
export interface RequirePropTypesRule {
  /**
   * Require type definitions in props.
   *
   * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
   */
  'vue/require-prop-types': RequirePropTypesRuleConfig;
}
