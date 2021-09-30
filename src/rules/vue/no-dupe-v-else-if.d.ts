import type { RuleConfig } from '../rule-config';

/**
 * disallow duplicate conditions in `v-if` / `v-else-if` chains
 *
 * @see [no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
 */
export type NoDupeVElseIfRuleConfig = RuleConfig<[]>;

/**
 * disallow duplicate conditions in `v-if` / `v-else-if` chains
 *
 * @see [no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
 */
export interface NoDupeVElseIfRule {
  /**
   * disallow duplicate conditions in `v-if` / `v-else-if` chains
   *
   * @see [no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
   */
  'vue/no-dupe-v-else-if': NoDupeVElseIfRuleConfig;
}
