import type { RuleConfig } from '../rule-config';

/**
 * Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
 */
export type NoDeprecatedPropsDefaultThisRuleConfig = RuleConfig<[]>;

/**
 * Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
 */
export interface NoDeprecatedPropsDefaultThisRule {
  /**
   * Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
   */
  'vue/no-deprecated-props-default-this': NoDeprecatedPropsDefaultThisRuleConfig;
}
