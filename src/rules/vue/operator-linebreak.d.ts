import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type OperatorLinebreakConfig = {
  overrides?: Record<string, any>;
};

/**
 * Option.
 */
export type OperatorLinebreakOption = 'after' | 'before' | 'none' | '';

/**
 * Options.
 */
export type OperatorLinebreakOptions = [OperatorLinebreakOption?, OperatorLinebreakConfig?];

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
