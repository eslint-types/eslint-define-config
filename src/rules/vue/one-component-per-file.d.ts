import type { RuleConfig } from '../rule-config';

/**
 * Enforce that each component should be in its own file.
 *
 * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
 */
export type OneComponentPerFileRuleConfig = RuleConfig<[]>;

/**
 * Enforce that each component should be in its own file.
 *
 * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
 */
export interface OneComponentPerFileRule {
  /**
   * Enforce that each component should be in its own file.
   *
   * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
   */
  'vue/one-component-per-file': OneComponentPerFileRuleConfig;
}
