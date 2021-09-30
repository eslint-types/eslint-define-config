import type { RuleConfig } from '../rule-config';

/**
 * enforce component's data property to be a function
 *
 * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
 */
export type NoSharedComponentDataRuleConfig = RuleConfig<[]>;

/**
 * enforce component's data property to be a function
 *
 * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
 */
export interface NoSharedComponentDataRule {
  /**
   * enforce component's data property to be a function
   *
   * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
   */
  'vue/no-shared-component-data': NoSharedComponentDataRuleConfig;
}
