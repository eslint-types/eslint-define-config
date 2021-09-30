import type { RuleConfig } from '../rule-config';

/**
 * disallow mutation of component props
 *
 * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
 */
export type NoMutatingPropsRuleConfig = RuleConfig<[]>;

/**
 * disallow mutation of component props
 *
 * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
 */
export interface NoMutatingPropsRule {
  /**
   * disallow mutation of component props
   *
   * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
   */
  'vue/no-mutating-props': NoMutatingPropsRuleConfig;
}
