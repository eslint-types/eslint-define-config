import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEmptyOption {
  allowEmptyCatch?: boolean;
}

/**
 * Options.
 */
export type NoEmptyOptions = [NoEmptyOption?];

/**
 * Disallow empty block statements.
 *
 * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
 */
export type NoEmptyRuleConfig = RuleConfig<NoEmptyOptions>;

/**
 * Disallow empty block statements.
 *
 * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
 */
export interface NoEmptyRule {
  /**
   * Disallow empty block statements.
   *
   * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
   */
  'no-empty': NoEmptyRuleConfig;
}
