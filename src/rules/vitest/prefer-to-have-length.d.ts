import type { RuleConfig } from '../rule-config';

/**
 * Suggest using toHaveLength().
 *
 * @see [prefer-to-have-length](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
 */
export type PreferToHaveLengthRuleConfig = RuleConfig<[]>;

/**
 * Suggest using toHaveLength().
 *
 * @see [prefer-to-have-length](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
 */
export interface PreferToHaveLengthRule {
  /**
   * Suggest using toHaveLength().
   *
   * @see [prefer-to-have-length](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
   */
  'vitest/prefer-to-have-length': PreferToHaveLengthRuleConfig;
}
