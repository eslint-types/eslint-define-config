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
 * @see [no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-redeclare.md)
 */
export type NoRedeclareRuleConfig = RuleConfig<NoRedeclareOptions>;

/**
 * Disallow variable redeclaration.
 *
 * @see [no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-redeclare.md)
 */
export interface NoRedeclareRule {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-redeclare.md)
   */
  '@typescript-eslint/no-redeclare': NoRedeclareRuleConfig;
}
