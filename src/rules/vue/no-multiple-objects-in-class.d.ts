import type { RuleConfig } from '../rule-config';

/**
 * disallow to pass multiple objects into array to class
 *
 * @see [no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html)
 */
export type NoMultipleObjectsInClassRuleConfig = RuleConfig<[]>;

/**
 * disallow to pass multiple objects into array to class
 *
 * @see [no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html)
 */
export interface NoMultipleObjectsInClassRule {
  /**
   * disallow to pass multiple objects into array to class
   *
   * @see [no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html)
   */
  'vue/no-multiple-objects-in-class': NoMultipleObjectsInClassRuleConfig;
}
