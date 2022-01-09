import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoReservedComponentNamesOption {
  disallowVueBuiltInComponents?: boolean;
  disallowVue3BuiltInComponents?: boolean;
}

/**
 * Options.
 */
export type NoReservedComponentNamesOptions = [NoReservedComponentNamesOption?];

/**
 * Disallow the use of reserved names in component definitions.
 *
 * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
 */
export type NoReservedComponentNamesRuleConfig =
  RuleConfig<NoReservedComponentNamesOptions>;

/**
 * Disallow the use of reserved names in component definitions.
 *
 * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
 */
export interface NoReservedComponentNamesRule {
  /**
   * Disallow the use of reserved names in component definitions.
   *
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  'vue/no-reserved-component-names': NoReservedComponentNamesRuleConfig;
}
