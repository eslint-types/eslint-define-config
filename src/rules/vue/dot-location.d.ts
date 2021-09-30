import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent newlines before and after dots
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export type DotLocationRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent newlines before and after dots
 *
 * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
 */
export interface DotLocationRule {
  /**
   * Enforce consistent newlines before and after dots
   *
   * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
   */
  'vue/dot-location': DotLocationRuleConfig;
}
