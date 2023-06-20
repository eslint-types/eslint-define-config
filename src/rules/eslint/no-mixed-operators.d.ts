import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMixedOperatorsOption {
  groups?: [
    (
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    ),
    (
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    ),
    ...(
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    )[],
  ][];
  allowSamePrecedence?: boolean;
}

/**
 * Options.
 */
export type NoMixedOperatorsOptions = [NoMixedOperatorsOption?];

/**
 * Disallow mixed binary operators.
 *
 * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
 */
export type NoMixedOperatorsRuleConfig = RuleConfig<NoMixedOperatorsOptions>;

/**
 * Disallow mixed binary operators.
 *
 * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
 */
export interface NoMixedOperatorsRule {
  /**
   * Disallow mixed binary operators.
   *
   * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
   */
  'no-mixed-operators': NoMixedOperatorsRuleConfig;
}
