import type { RuleConfig } from '../rule-config';

/**
 * Prefer mock resolved/rejected shorthands for promises.
 *
 * @see [preferMockPromiseShorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/preferMockPromiseShorthand.md)
 */
export type PreferMockPromiseShorthandRuleConfig = RuleConfig<[]>;

/**
 * Prefer mock resolved/rejected shorthands for promises.
 *
 * @see [preferMockPromiseShorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/preferMockPromiseShorthand.md)
 */
export interface PreferMockPromiseShorthandRule {
  /**
   * Prefer mock resolved/rejected shorthands for promises.
   *
   * @see [preferMockPromiseShorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/preferMockPromiseShorthand.md)
   */
  'vitest/preferMockPromiseShorthand': PreferMockPromiseShorthandRuleConfig;
}
