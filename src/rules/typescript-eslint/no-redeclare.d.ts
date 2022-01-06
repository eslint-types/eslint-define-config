import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRedeclareOption {
  builtinGlobals?: boolean;
  ignoreDeclarationMerge?: boolean;
}

/**
 * Options.
 */
export type NoRedeclareOptions = [NoRedeclareOption?];

/**
 * Disallow variable redeclaration.
 *
 * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
 */
export type NoRedeclareRuleConfig = RuleConfig<NoRedeclareOptions>;

/**
 * Disallow variable redeclaration.
 *
 * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
 */
export interface NoRedeclareRule {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
   */
  '@typescript-eslint/no-redeclare': NoRedeclareRuleConfig;
}
