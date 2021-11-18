import type { RuleConfig } from '../rule-config';

/**
 * Disallows the use of require statements except in import statements.
 *
 * @see [no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-var-requires.md)
 */
export type NoVarRequiresRuleConfig = RuleConfig<[]>;

/**
 * Disallows the use of require statements except in import statements.
 *
 * @see [no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-var-requires.md)
 */
export interface NoVarRequiresRule {
  /**
   * Disallows the use of require statements except in import statements.
   *
   * @see [no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-var-requires.md)
   */
  '@typescript-eslint/no-var-requires': NoVarRequiresRuleConfig;
}
