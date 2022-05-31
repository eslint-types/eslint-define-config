import type { RuleConfig } from '../rule-config';

/**
 * Disallow `require` statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export type NoVarRequiresRuleConfig = RuleConfig<[]>;

/**
 * Disallow `require` statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export interface NoVarRequiresRule {
  /**
   * Disallow `require` statements except in import statements.
   *
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  '@typescript-eslint/no-var-requires': NoVarRequiresRuleConfig;
}
