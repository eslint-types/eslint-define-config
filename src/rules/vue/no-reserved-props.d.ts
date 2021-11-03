import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoReservedPropsOption {
  vueVersion?: 2 | 3;
}

/**
 * Options.
 */
export type NoReservedPropsOptions = [NoReservedPropsOption?];

/**
 * Disallow reserved names in props.
 *
 * @see [no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
 */
export type NoReservedPropsRuleConfig = RuleConfig<NoReservedPropsOptions>;

/**
 * Disallow reserved names in props.
 *
 * @see [no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
 */
export interface NoReservedPropsRule {
  /**
   * Disallow reserved names in props.
   *
   * @see [no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
   */
  'vue/no-reserved-props': NoReservedPropsRuleConfig;
}
