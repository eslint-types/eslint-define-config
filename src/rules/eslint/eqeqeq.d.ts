import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type EqeqeqOption =
  | []
  | ['always']
  | [
      'always',
      {
        null?: 'always' | 'never' | 'ignore';
      },
    ]
  | []
  | ['smart' | 'allow-null'];

/**
 * Options.
 */
export type EqeqeqOptions = EqeqeqOption;

/**
 * Require the use of `===` and `!==`.
 *
 * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
 */
export type EqeqeqRuleConfig = RuleConfig<EqeqeqOptions>;

/**
 * Require the use of `===` and `!==`.
 *
 * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
 */
export interface EqeqeqRule {
  /**
   * Require the use of `===` and `!==`.
   *
   * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
   */
  eqeqeq: EqeqeqRuleConfig;
}
