import type { RuleConfig } from '../rule-config';

/**
 * Ensures the proper number of arguments are passed to Promise functions.
 *
 * @see [valid-params](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
 */
export type ValidParamsRuleConfig = RuleConfig<[]>;

/**
 * Ensures the proper number of arguments are passed to Promise functions.
 *
 * @see [valid-params](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
 */
export interface ValidParamsRule {
  /**
   * Ensures the proper number of arguments are passed to Promise functions.
   *
   * @see [valid-params](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/valid-params.md)
   */
  'promise/valid-params': ValidParamsRuleConfig;
}
