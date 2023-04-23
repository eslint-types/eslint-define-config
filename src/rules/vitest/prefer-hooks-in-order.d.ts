import type { RuleConfig } from '../rule-config';

/**
 * Prefer having hooks in consistent order.
 *
 * @see [prefer-hooks-in-order](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
 */
export type PreferHooksInOrderRuleConfig = RuleConfig<[]>;

/**
 * Prefer having hooks in consistent order.
 *
 * @see [prefer-hooks-in-order](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
 */
export interface PreferHooksInOrderRule {
  /**
   * Prefer having hooks in consistent order.
   *
   * @see [prefer-hooks-in-order](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
   */
  'vitest/prefer-hooks-in-order': PreferHooksInOrderRuleConfig;
}
