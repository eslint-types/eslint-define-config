import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `toBeTruthy`.
 *
 * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
 */
export type PreferToBeTruthyRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `toBeTruthy`.
 *
 * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
 */
export interface PreferToBeTruthyRule {
  /**
   * Suggest using `toBeTruthy`.
   *
   * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
   */
  'vitest/prefer-to-be-truthy': PreferToBeTruthyRuleConfig;
}
