import type { RuleConfig } from '../rule-config';

/**
 * Require type definitions in emits.
 *
 * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
 */
export type RequireEmitValidatorRuleConfig = RuleConfig<[]>;

/**
 * Require type definitions in emits.
 *
 * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
 */
export interface RequireEmitValidatorRule {
  /**
   * Require type definitions in emits.
   *
   * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
   */
  'vue/require-emit-validator': RequireEmitValidatorRuleConfig;
}
