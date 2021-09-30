import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent linebreak style for operators
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export type OperatorLinebreakRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent linebreak style for operators
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export interface OperatorLinebreakRule {
  /**
   * Enforce consistent linebreak style for operators
   *
   * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
   */
  'vue/operator-linebreak': OperatorLinebreakRuleConfig;
}
