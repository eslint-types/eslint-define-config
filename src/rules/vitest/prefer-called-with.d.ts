import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
 *
 * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
 */
export type PreferCalledWithRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
 *
 * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
 */
export interface PreferCalledWithRule {
  /**
   * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
   *
   * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
   */
  'vitest/prefer-called-with': PreferCalledWithRuleConfig;
}
