import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewCapOption {
  newIsCap?: boolean;
  capIsNew?: boolean;
  newIsCapExceptions?: string[];
  newIsCapExceptionPattern?: string;
  capIsNewExceptions?: string[];
  capIsNewExceptionPattern?: string;
  properties?: boolean;
}

/**
 * Options.
 */
export type NewCapOptions = [NewCapOption?];

/**
 * Require constructor names to begin with a capital letter.
 *
 * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
 */
export type NewCapRuleConfig = RuleConfig<NewCapOptions>;

/**
 * Require constructor names to begin with a capital letter.
 *
 * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
 */
export interface NewCapRule {
  /**
   * Require constructor names to begin with a capital letter.
   *
   * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
   */
  'new-cap': NewCapRuleConfig;
}
