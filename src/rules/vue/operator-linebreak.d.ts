import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent linebreak style for operators
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export type OperatorLinebreakRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent linebreak style for operators
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export interface OperatorLinebreakRule {
  /**
   * enforce consistent linebreak style for operators
   *
   * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
   */
  'vue/operator-linebreak': OperatorLinebreakRuleConfig;
}
