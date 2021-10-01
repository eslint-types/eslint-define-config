import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferConstOption {
  /**
   * The kind of the way to address variables in destructuring.
   *
   * @default 'any'
   *
   * @see [destructuring](https://eslint.org/docs/rules/prefer-const#destructuring)
   */
  destructuring?: 'any' | 'all';
  /**
   * This is an option to avoid conflicting with `no-use-before-define` rule (without `"nofunc"` option).
   *
   * If `true` is specified, this rule will ignore variables that are read between the declaration and the first assignment.
   *
   * @default false
   *
   * @see [ignoreReadBeforeAssign](https://eslint.org/docs/rules/prefer-const#ignorereadbeforeassign)
   */
  ignoreReadBeforeAssign?: boolean;
}

/**
 * Options.
 */
export type PreferConstOptions = [PreferConstOption?];

/**
 * Require `const` declarations for variables that are never reassigned after declared.
 *
 * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
 */
export type PreferConstRuleConfig = RuleConfig<PreferConstOptions>;

/**
 * Require `const` declarations for variables that are never reassigned after declared.
 *
 * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
 */
export interface PreferConstRule {
  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
   */
  'prefer-const': PreferConstRuleConfig;
}
