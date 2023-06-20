import type { RuleConfig } from '../rule-config';

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
 */
export type DefaultParamLastRuleConfig = RuleConfig<[]>;

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
 */
export interface DefaultParamLastRule {
  /**
   * Enforce default parameters to be last.
   *
   * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
   */
  'default-param-last': DefaultParamLastRuleConfig;
}
