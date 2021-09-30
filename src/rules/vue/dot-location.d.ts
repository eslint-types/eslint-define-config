import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent newlines before and after dots
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export type DotLocationRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent newlines before and after dots
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export interface DotLocationRule {
  /**
   * enforce consistent newlines before and after dots
   *
   * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
   */
  'vue/dot-location': DotLocationRuleConfig;
}
