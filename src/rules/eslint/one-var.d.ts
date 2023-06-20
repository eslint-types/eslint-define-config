import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type OneVarOption =
  | ('always' | 'never' | 'consecutive')
  | {
      separateRequires?: boolean;
      var?: 'always' | 'never' | 'consecutive';
      let?: 'always' | 'never' | 'consecutive';
      const?: 'always' | 'never' | 'consecutive';
    }
  | {
      initialized?: 'always' | 'never' | 'consecutive';
      uninitialized?: 'always' | 'never' | 'consecutive';
    };

/**
 * Options.
 */
export type OneVarOptions = [OneVarOption?];

/**
 * Enforce variables to be declared either together or separately in functions.
 *
 * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
 */
export type OneVarRuleConfig = RuleConfig<OneVarOptions>;

/**
 * Enforce variables to be declared either together or separately in functions.
 *
 * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
 */
export interface OneVarRule {
  /**
   * Enforce variables to be declared either together or separately in functions.
   *
   * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
   */
  'one-var': OneVarRuleConfig;
}
