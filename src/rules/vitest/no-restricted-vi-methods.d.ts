import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRestrictedViMethodsOption {
  [k: string]: string | null;
}

/**
 * Options.
 */
export type NoRestrictedViMethodsOptions = [NoRestrictedViMethodsOption?];

/**
 * Disallow specific `vi.` methods.
 *
 * @see [no-restricted-vi-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
 */
export type NoRestrictedViMethodsRuleConfig =
  RuleConfig<NoRestrictedViMethodsOptions>;

/**
 * Disallow specific `vi.` methods.
 *
 * @see [no-restricted-vi-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
 */
export interface NoRestrictedViMethodsRule {
  /**
   * Disallow specific `vi.` methods.
   *
   * @see [no-restricted-vi-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
   */
  'vitest/no-restricted-vi-methods': NoRestrictedViMethodsRuleConfig;
}
