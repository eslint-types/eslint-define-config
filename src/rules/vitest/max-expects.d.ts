import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxExpectsOption {
  max?: number;
}

/**
 * Options.
 */
export type MaxExpectsOptions = [MaxExpectsOption?];

/**
 * Enforce a maximum number of expect per test.
 *
 * @see [max-expects](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
 */
export type MaxExpectsRuleConfig = RuleConfig<MaxExpectsOptions>;

/**
 * Enforce a maximum number of expect per test.
 *
 * @see [max-expects](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
 */
export interface MaxExpectsRule {
  /**
   * Enforce a maximum number of expect per test.
   *
   * @see [max-expects](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
   */
  'vitest/max-expects': MaxExpectsRuleConfig;
}
