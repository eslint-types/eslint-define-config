import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type AssertionTypeOption = {
  type: 'chai' | 'jest';
};

/**
 * Options.
 */
export type AssertionTypeOptions = [AssertionTypeOption?];

/**
 * Enforce assertion type.
 *
 * @see [assertion-type](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/assertion-type.md)
 */
export type AssertionTypeRuleConfig = RuleConfig<AssertionTypeOptions>;

/**
 * Enforce assertion type.
 *
 * @see [assertion-type](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/assertion-type.md)
 */
export interface AssertionTypeRule {
  /**
   * Enforce assertion type.
   *
   * @see [assertion-type](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/assertion-type.md)
   */
  'vitest/assertion-type': AssertionTypeRuleConfig;
}
