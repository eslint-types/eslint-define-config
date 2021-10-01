import type { RuleConfig } from '../rule-config';

/**
 * Require `let` or `const` instead of `var`.
 *
 * @see [no-var](https://eslint.org/docs/rules/no-var)
 */
export type NoVarRuleConfig = RuleConfig<[]>;

/**
 * Require `let` or `const` instead of `var`.
 *
 * @see [no-var](https://eslint.org/docs/rules/no-var)
 */
export interface NoVarRule {
  /**
   * Require `let` or `const` instead of `var`.
   *
   * @see [no-var](https://eslint.org/docs/rules/no-var)
   */
  'no-var': NoVarRuleConfig;
}
