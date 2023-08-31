import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Require `let` or `const` instead of `var`.
 *
 * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
 */
export type NoVarRuleConfig = RuleConfig<[]>;

/**
 * Require `let` or `const` instead of `var`.
 *
 * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
 */
export interface NoVarRule {
  /**
   * Require `let` or `const` instead of `var`.
   *
   * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
   */
  'no-var': NoVarRuleConfig;
}
