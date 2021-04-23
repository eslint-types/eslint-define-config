import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferConstOption = {
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
};

/**
 * Options.
 */
export type PreferConstOptions = [PreferConstOption?];

/**
 * Suggest using `const`.
 *
 * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
 */
export type PreferConstRuleConfig = RuleConfig<PreferConstOptions>;

/**
 * Suggest using `const`.
 *
 * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
 */
export interface PreferConstRule {
  /**
   * Suggest using `const`.
   *
   * @see [prefer-const](https://eslint.org/docs/rules/prefer-const)
   */
  'prefer-const': PreferConstRuleConfig;
}
