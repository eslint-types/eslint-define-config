import type { RuleConfig } from '../rule-config';

/**
 * Disallow mutation of component props.
 *
 * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
 */
export type NoMutatingPropsRuleConfig = RuleConfig<[]>;

/**
 * Disallow mutation of component props.
 *
 * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
 */
export interface NoMutatingPropsRule {
  /**
   * Disallow mutation of component props.
   *
   * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
   */
  'vue/no-mutating-props': NoMutatingPropsRuleConfig;
}
