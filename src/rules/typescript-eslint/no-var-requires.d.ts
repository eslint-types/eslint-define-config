import type { RuleConfig } from '../rule-config';

/**
 * Disallows the use of require statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export type NoVarRequiresRuleConfig = RuleConfig<[]>;

/**
 * Disallows the use of require statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export interface NoVarRequiresRule {
  /**
   * Disallows the use of require statements except in import statements.
   *
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  '@typescript-eslint/no-var-requires': NoVarRequiresRuleConfig;
}
