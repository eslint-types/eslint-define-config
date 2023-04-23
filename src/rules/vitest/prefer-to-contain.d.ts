import type { RuleConfig } from '../rule-config';

/**
 * Prefer using toContain().
 *
 * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
 */
export type PreferToContainRuleConfig = RuleConfig<[]>;

/**
 * Prefer using toContain().
 *
 * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
 */
export interface PreferToContainRule {
  /**
   * Prefer using toContain().
   *
   * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
   */
  'vitest/prefer-to-contain': PreferToContainRuleConfig;
}
