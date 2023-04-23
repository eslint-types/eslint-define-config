import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTestItOption {
  fn?: 'test' | 'it';
  withinDescribe?: 'test' | 'it';
}

/**
 * Options.
 */
export type ConsistentTestItOptions = [ConsistentTestItOption?];

/**
 * Prefer test or it but not both.
 *
 * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
 */
export type ConsistentTestItRuleConfig = RuleConfig<ConsistentTestItOptions>;

/**
 * Prefer test or it but not both.
 *
 * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
 */
export interface ConsistentTestItRule {
  /**
   * Prefer test or it but not both.
   *
   * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
   */
  'vitest/consistent-test-it': ConsistentTestItRuleConfig;
}
