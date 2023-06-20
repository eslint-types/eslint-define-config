import type { RuleConfig } from '../rule-config';

/**
 * Require rest parameters instead of `arguments`.
 *
 * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
 */
export type PreferRestParamsRuleConfig = RuleConfig<[]>;

/**
 * Require rest parameters instead of `arguments`.
 *
 * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
 */
export interface PreferRestParamsRule {
  /**
   * Require rest parameters instead of `arguments`.
   *
   * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
   */
  'prefer-rest-params': PreferRestParamsRuleConfig;
}
