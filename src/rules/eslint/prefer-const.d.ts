import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferConstOption {
  destructuring?: 'any' | 'all';
  ignoreReadBeforeAssign?: boolean;
}

/**
 * Options.
 */
export type PreferConstOptions = [PreferConstOption?];

/**
 * Require `const` declarations for variables that are never reassigned after declared.
 *
 * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
 */
export type PreferConstRuleConfig = RuleConfig<PreferConstOptions>;

/**
 * Require `const` declarations for variables that are never reassigned after declared.
 *
 * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
 */
export interface PreferConstRule {
  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
   */
  'prefer-const': PreferConstRuleConfig;
}
