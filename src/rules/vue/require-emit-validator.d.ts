import type { RuleConfig } from '../rule-config';

/**
 * require type definitions in emits
 *
 * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
 */
export type RequireEmitValidatorRuleConfig = RuleConfig<[]>;

/**
 * require type definitions in emits
 *
 * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
 */
export interface RequireEmitValidatorRule {
  /**
   * require type definitions in emits
   *
   * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
   */
  'vue/require-emit-validator': RequireEmitValidatorRuleConfig;
}
