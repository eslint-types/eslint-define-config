import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnregisteredComponentsOption = {
  /**
   * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
   */
  ignorePatterns?: any;
};

/**
 * Options.
 */
export type NoUnregisteredComponentsOptions = [NoUnregisteredComponentsOption?];

/**
 * disallow using components that are not registered inside templates
 *
 * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
 */
export type NoUnregisteredComponentsRuleConfig = RuleConfig<NoUnregisteredComponentsOptions>;

/**
 * disallow using components that are not registered inside templates
 *
 * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
 */
export interface NoUnregisteredComponentsRule {
  /**
   * disallow using components that are not registered inside templates
   *
   * @see [no-unregistered-components](https://eslint.vuejs.org/rules/no-unregistered-components.html)
   */
  'vue/no-unregistered-components': NoUnregisteredComponentsRuleConfig;
}
