import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type OperatorLinebreakOption = 'after' | 'before' | 'none' | '';

/**
 * Options.
 */
export type OperatorLinebreakOptions = [OperatorLinebreakOption?];

/**
 * Enforce consistent linebreak style for operators
 *
 * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
 */
export type OperatorLinebreakRuleConfig = RuleConfig<OperatorLinebreakOptions>;

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
