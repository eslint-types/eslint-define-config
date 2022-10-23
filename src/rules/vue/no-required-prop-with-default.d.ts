import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRequiredPropWithDefaultOption {
  autofix?: boolean;
}

/**
 * Options.
 */
export type NoRequiredPropWithDefaultOptions = [
  NoRequiredPropWithDefaultOption?,
];

/**
 * Enforce props with default values to be optional.
 *
 * @see [no-required-prop-with-default](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
 */
export type NoRequiredPropWithDefaultRuleConfig =
  RuleConfig<NoRequiredPropWithDefaultOptions>;

/**
 * Enforce props with default values to be optional.
 *
 * @see [no-required-prop-with-default](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
 */
export interface NoRequiredPropWithDefaultRule {
  /**
   * Enforce props with default values to be optional.
   *
   * @see [no-required-prop-with-default](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
   */
  'vue/no-required-prop-with-default': NoRequiredPropWithDefaultRuleConfig;
}
