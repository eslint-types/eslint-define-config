import type { RuleConfig } from '../rule-config';

/**
 * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
 */
export type NoDeprecatedPropsDefaultThisRuleConfig = RuleConfig<[]>;

/**
 * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
 */
export interface NoDeprecatedPropsDefaultThisRule {
  /**
   * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
   */
  'vue/no-deprecated-props-default-this': NoDeprecatedPropsDefaultThisRuleConfig;
}
