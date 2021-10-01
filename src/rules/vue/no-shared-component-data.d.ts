import type { RuleConfig } from '../rule-config';

/**
 * Enforce component's data property to be a function.
 *
 * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
 */
export type NoSharedComponentDataRuleConfig = RuleConfig<[]>;

/**
 * Enforce component's data property to be a function.
 *
 * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
 */
export interface NoSharedComponentDataRule {
  /**
   * Enforce component's data property to be a function.
   *
   * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
   */
  'vue/no-shared-component-data': NoSharedComponentDataRuleConfig;
}
