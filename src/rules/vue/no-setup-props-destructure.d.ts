import type { RuleConfig } from '../rule-config';

/**
 * Disallow destructuring of `props` passed to `setup`.
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export type NoSetupPropsDestructureRuleConfig = RuleConfig<[]>;

/**
 * Disallow destructuring of `props` passed to `setup`.
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export interface NoSetupPropsDestructureRule {
  /**
   * Disallow destructuring of `props` passed to `setup`.
   *
   * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
   */
  'vue/no-setup-props-destructure': NoSetupPropsDestructureRuleConfig;
}
