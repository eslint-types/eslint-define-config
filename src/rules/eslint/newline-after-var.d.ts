import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NewlineAfterVarOption = 'never' | 'always';

/**
 * Options.
 */
export type NewlineAfterVarOptions = [NewlineAfterVarOption?];

/**
 * Require or disallow an empty line after variable declarations.
 *
 * @deprecated
 *
 * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
 */
export type NewlineAfterVarRuleConfig = RuleConfig<NewlineAfterVarOptions>;

/**
 * Require or disallow an empty line after variable declarations.
 *
 * @deprecated
 *
 * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
 */
export interface NewlineAfterVarRule {
  /**
   * Require or disallow an empty line after variable declarations.
   *
   * @deprecated
   *
   * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
   */
  'newline-after-var': NewlineAfterVarRuleConfig;
}
