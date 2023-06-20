import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMutatingPropsOption {
  shallowOnly?: boolean;
}

/**
 * Options.
 */
export type NoMutatingPropsOptions = [NoMutatingPropsOption?];

/**
 * Disallow mutation of component props.
 *
 * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
 */
export type NoMutatingPropsRuleConfig = RuleConfig<NoMutatingPropsOptions>;

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
