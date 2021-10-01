import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnregisteredComponentsOption {
  ignorePatterns?: any[];
}

/**
 * Options.
 */
export type NoUnregisteredComponentsOptions = [NoUnregisteredComponentsOption?];

/**
 * Disallow using components that are not registered inside templates.
 *
 * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
 */
export type NoUnregisteredComponentsRuleConfig = RuleConfig<NoUnregisteredComponentsOptions>;

/**
 * Disallow using components that are not registered inside templates.
 *
 * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
 */
export interface NoUnregisteredComponentsRule {
  /**
   * Disallow using components that are not registered inside templates.
   *
   * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
   */
  'vue/no-unregistered-components': NoUnregisteredComponentsRuleConfig;
}
