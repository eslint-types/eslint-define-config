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
 * Enforces consistent spacing before function parenthesis.
 *
 * @see [space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md)
 */
export type SpaceBeforeFunctionParenRuleConfig = RuleConfig<SpaceBeforeFunctionParenOptions>;

/**
 * Enforces consistent spacing before function parenthesis.
 *
 * @see [space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md)
 */
export interface SpaceBeforeFunctionParenRule {
  /**
   * Enforces consistent spacing before function parenthesis.
   *
   * @see [space-before-function-paren](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md)
   */
  '@typescript-eslint/space-before-function-paren': SpaceBeforeFunctionParenRuleConfig;
}
