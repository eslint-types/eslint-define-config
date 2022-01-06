import type { RuleConfig } from '../rule-config';

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
 */
export type DefaultParamLastRuleConfig = RuleConfig<[]>;

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
 */
export interface DefaultParamLastRule {
  /**
   * Enforce default parameters to be last.
   *
   * @see [default-param-last](https://typescript-eslint.io/rules/default-param-last)
   */
  '@typescript-eslint/default-param-last': DefaultParamLastRuleConfig;
}
