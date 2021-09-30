import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoConstantConditionOption = {
  /**
   * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
   */
  checkLoops?: any;
};

/**
 * Options.
 */
export type NoConstantConditionOptions = [NoConstantConditionOption?];

/**
 * disallow constant expressions in conditions
 *
 * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
 */
export type NoConstantConditionRuleConfig = RuleConfig<NoConstantConditionOptions>;

/**
 * disallow constant expressions in conditions
 *
 * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
 */
export interface NoConstantConditionRule {
  /**
   * disallow constant expressions in conditions
   *
   * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
   */
  'vue/no-constant-condition': NoConstantConditionRuleConfig;
}
