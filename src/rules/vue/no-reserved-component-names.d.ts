import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoReservedComponentNamesOption = {
  /**
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  disallowVueBuiltInComponents?: any;

  /**
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  disallowVue3BuiltInComponents?: any;
};

/**
 * Options.
 */
export type NoReservedComponentNamesOptions = [NoReservedComponentNamesOption?];

/**
 * disallow the use of reserved names in component definitions
 *
 * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
 */
export type NoReservedComponentNamesRuleConfig = RuleConfig<NoReservedComponentNamesOptions>;

/**
 * disallow the use of reserved names in component definitions
 *
 * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
 */
export interface NoReservedComponentNamesRule {
  /**
   * disallow the use of reserved names in component definitions
   *
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  'vue/no-reserved-component-names': NoReservedComponentNamesRuleConfig;
}
