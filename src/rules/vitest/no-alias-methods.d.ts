import type { RuleConfig } from '../rule-config';

/**
 * Disallow alias methods.
 *
 * @see [no-alias-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
 */
export type NoAliasMethodsRuleConfig = RuleConfig<[]>;

/**
 * Disallow alias methods.
 *
 * @see [no-alias-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
 */
export interface NoAliasMethodsRule {
  /**
   * Disallow alias methods.
   *
   * @see [no-alias-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
   */
  'vitest/no-alias-methods': NoAliasMethodsRuleConfig;
}
