import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRedeclareOption {
  builtinGlobals?: boolean;
}

/**
 * Options.
 */
export type NoRedeclareOptions = [NoRedeclareOption?];

/**
 * Disallow variable redeclaration.
 *
 * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
 */
export type NoRedeclareRuleConfig = RuleConfig<NoRedeclareOptions>;

/**
 * Disallow variable redeclaration.
 *
 * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
 */
export interface NoRedeclareRule {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
   */
  'no-redeclare': NoRedeclareRuleConfig;
}
