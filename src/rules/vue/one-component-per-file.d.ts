import type { RuleConfig } from '../rule-config';

/**
 * enforce that each component should be in its own file
 *
 * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
 */
export type OneComponentPerFileRuleConfig = RuleConfig<[]>;

/**
 * enforce that each component should be in its own file
 *
 * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
 */
export interface OneComponentPerFileRule {
  /**
   * enforce that each component should be in its own file
   *
   * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
   */
  'vue/one-component-per-file': OneComponentPerFileRuleConfig;
}
