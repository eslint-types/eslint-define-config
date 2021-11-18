import type { RuleConfig } from '../rule-config';

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/default-param-last.md)
 */
export type DefaultParamLastRuleConfig = RuleConfig<[]>;

/**
 * Enforce default parameters to be last.
 *
 * @see [default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/default-param-last.md)
 */
export interface DefaultParamLastRule {
  /**
   * Enforce default parameters to be last.
   *
   * @see [default-param-last](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/default-param-last.md)
   */
  '@typescript-eslint/default-param-last': DefaultParamLastRuleConfig;
}
