import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryTypeAssertionOption {
  typesToIgnore?: string[];
  [k: string]: any;
}

/**
 * Options.
 */
export type NoUnnecessaryTypeAssertionOptions = [NoUnnecessaryTypeAssertionOption?];

/**
 * Warns if a type assertion does not change the type of an expression.
 *
 * @see [no-unnecessary-type-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)
 */
export type NoUnnecessaryTypeAssertionRuleConfig = RuleConfig<NoUnnecessaryTypeAssertionOptions>;

/**
 * Warns if a type assertion does not change the type of an expression.
 *
 * @see [no-unnecessary-type-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)
 */
export interface NoUnnecessaryTypeAssertionRule {
  /**
   * Warns if a type assertion does not change the type of an expression.
   *
   * @see [no-unnecessary-type-assertion](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md)
   */
  '@typescript-eslint/no-unnecessary-type-assertion': NoUnnecessaryTypeAssertionRuleConfig;
}
