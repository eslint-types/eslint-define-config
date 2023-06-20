import type { RuleConfig } from '../rule-config';

/**
 * Disallow `v-if` directives on root element.
 *
 * @see [no-root-v-if](https://eslint.vuejs.org/rules/no-root-v-if.html)
 */
export type NoRootVIfRuleConfig = RuleConfig<[]>;

/**
 * Disallow `v-if` directives on root element.
 *
 * @see [no-root-v-if](https://eslint.vuejs.org/rules/no-root-v-if.html)
 */
export interface NoRootVIfRule {
  /**
   * Disallow `v-if` directives on root element.
   *
   * @see [no-root-v-if](https://eslint.vuejs.org/rules/no-root-v-if.html)
   */
  'vue/no-root-v-if': NoRootVIfRuleConfig;
}
