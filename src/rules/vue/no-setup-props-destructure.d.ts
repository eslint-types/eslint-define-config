import type { RuleConfig } from '../rule-config';

/**
 * disallow destructuring of `props` passed to `setup`
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export type NoSetupPropsDestructureRuleConfig = RuleConfig<[]>;

/**
 * disallow destructuring of `props` passed to `setup`
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export interface NoSetupPropsDestructureRule {
  /**
   * disallow destructuring of `props` passed to `setup`
   *
   * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
   */
  'vue/no-setup-props-destructure': NoSetupPropsDestructureRuleConfig;
}
