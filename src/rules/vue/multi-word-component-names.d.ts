import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MultiWordComponentNamesOption {
  ignores?: string[];
}

/**
 * Options.
 */
export type MultiWordComponentNamesOptions = [MultiWordComponentNamesOption?];

/**
 * Require component names to be always multi-word.
 *
 * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
 */
export type MultiWordComponentNamesRuleConfig =
  RuleConfig<MultiWordComponentNamesOptions>;

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
