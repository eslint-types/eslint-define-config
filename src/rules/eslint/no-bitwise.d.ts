import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoBitwiseOption {
  allow?: (
    | '^'
    | '|'
    | '&'
    | '<<'
    | '>>'
    | '>>>'
    | '^='
    | '|='
    | '&='
    | '<<='
    | '>>='
    | '>>>='
    | '~'
  )[];
  int32Hint?: boolean;
}

/**
 * Options.
 */
export type NoBitwiseOptions = [NoBitwiseOption?];

/**
 * Disallow bitwise operators.
 *
 * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
 */
export type NoBitwiseRuleConfig = RuleConfig<NoBitwiseOptions>;

/**
 * Disallow bitwise operators.
 *
 * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
 */
export interface NoBitwiseRule {
  /**
   * Disallow bitwise operators.
   *
   * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
   */
  'no-bitwise': NoBitwiseRuleConfig;
}
