import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Require spread operators instead of `.apply()`.
 *
 * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
 */
export type PreferSpreadRuleConfig = RuleConfig<[]>;

/**
 * Require spread operators instead of `.apply()`.
 *
 * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
 */
export interface PreferSpreadRule {
  /**
   * Require spread operators instead of `.apply()`.
   *
   * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
   */
  'prefer-spread': PreferSpreadRuleConfig;
}
