import type { RuleConfig } from '../rule-config';

/**
 * Prefer toBeObject().
 *
 * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
 */
export type PreferToBeObjectRuleConfig = RuleConfig<[]>;

/**
 * Prefer toBeObject().
 *
 * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
 */
export interface PreferToBeObjectRule {
  /**
   * Prefer toBeObject().
   *
   * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
   */
  'vitest/prefer-to-be-object': PreferToBeObjectRuleConfig;
}
