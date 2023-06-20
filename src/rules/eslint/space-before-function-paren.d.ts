import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceBeforeFunctionParenOption =
  | ('always' | 'never')
  | {
      anonymous?: 'always' | 'never' | 'ignore';
      named?: 'always' | 'never' | 'ignore';
      asyncArrow?: 'always' | 'never' | 'ignore';
    };

/**
 * Options.
 */
export type SpaceBeforeFunctionParenOptions = [SpaceBeforeFunctionParenOption?];

/**
 * Enforce consistent spacing before `function` definition opening parenthesis.
 *
 * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
 */
export type SpaceBeforeFunctionParenRuleConfig =
  RuleConfig<SpaceBeforeFunctionParenOptions>;

/**
 * Enforce consistent spacing before `function` definition opening parenthesis.
 *
 * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
 */
export interface SpaceBeforeFunctionParenRule {
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis.
   *
   * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
   */
  'space-before-function-paren': SpaceBeforeFunctionParenRuleConfig;
}
