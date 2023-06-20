import type { RuleConfig } from '../rule-config';

/**
 * Disallow useless backreferences in regular expressions.
 *
 * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
 */
export type NoUselessBackreferenceRuleConfig = RuleConfig<[]>;

/**
 * Disallow useless backreferences in regular expressions.
 *
 * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
 */
export interface NoUselessBackreferenceRule {
  /**
   * Disallow useless backreferences in regular expressions.
   *
   * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
   */
  'no-useless-backreference': NoUselessBackreferenceRuleConfig;
}
