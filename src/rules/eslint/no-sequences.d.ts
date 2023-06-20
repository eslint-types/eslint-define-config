import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoSequencesOption {
  allowInParentheses?: boolean;
}

/**
 * Options.
 */
export type NoSequencesOptions = [NoSequencesOption?];

/**
 * Disallow comma operators.
 *
 * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
 */
export type NoSequencesRuleConfig = RuleConfig<NoSequencesOptions>;

/**
 * Disallow comma operators.
 *
 * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
 */
export interface NoSequencesRule {
  /**
   * Disallow comma operators.
   *
   * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
   */
  'no-sequences': NoSequencesRuleConfig;
}
