import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type StrictOption = 'never' | 'global' | 'function' | 'safe';

/**
 * Options.
 */
export type StrictOptions = [StrictOption?];

/**
 * Require or disallow strict mode directives.
 *
 * @see [strict](https://eslint.org/docs/latest/rules/strict)
 */
export type StrictRuleConfig = RuleConfig<StrictOptions>;

/**
 * Require or disallow strict mode directives.
 *
 * @see [strict](https://eslint.org/docs/latest/rules/strict)
 */
export interface StrictRule {
  /**
   * Require or disallow strict mode directives.
   *
   * @see [strict](https://eslint.org/docs/latest/rules/strict)
   */
  strict: StrictRuleConfig;
}
