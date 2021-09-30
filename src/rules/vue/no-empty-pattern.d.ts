import type { RuleConfig } from '../rule-config';

/**
 * disallow empty destructuring patterns
 *
 * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
 */
export type NoEmptyPatternRuleConfig = RuleConfig<[]>;

/**
 * disallow empty destructuring patterns
 *
 * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
 */
export interface NoEmptyPatternRule {
  /**
   * disallow empty destructuring patterns
   *
   * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
   */
  'vue/no-empty-pattern': NoEmptyPatternRuleConfig;
}
