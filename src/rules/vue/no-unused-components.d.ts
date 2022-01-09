import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnusedComponentsOption {
  ignoreWhenBindingPresent?: boolean;
}

/**
 * Options.
 */
export type NoUnusedComponentsOptions = [NoUnusedComponentsOption?];

/**
 * Disallow registering components that are not used inside templates.
 *
 * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
 */
export type NoUnusedComponentsRuleConfig =
  RuleConfig<NoUnusedComponentsOptions>;

/**
 * Disallow registering components that are not used inside templates.
 *
 * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
 */
export interface NoUnusedComponentsRule {
  /**
   * Disallow registering components that are not used inside templates.
   *
   * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
   */
  'vue/no-unused-components': NoUnusedComponentsRuleConfig;
}
