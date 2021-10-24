import type { RuleConfig } from '../rule-config';

/**
 * Require component names to be always multi-word.
 *
 * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
 */
export type MultiWordComponentNamesRuleConfig = RuleConfig<[]>;

/**
 * Require component names to be always multi-word.
 *
 * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
 */
export interface MultiWordComponentNamesRule {
  /**
   * Require component names to be always multi-word.
   *
   * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
   */
  'vue/multi-word-component-names': MultiWordComponentNamesRuleConfig;
}
