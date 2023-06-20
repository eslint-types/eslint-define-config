import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnsafeNegationOption {
  enforceForOrderingRelations?: boolean;
}

/**
 * Options.
 */
export type NoUnsafeNegationOptions = [NoUnsafeNegationOption?];

/**
 * Disallow negating the left operand of relational operators.
 *
 * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
 */
export type NoUnsafeNegationRuleConfig = RuleConfig<NoUnsafeNegationOptions>;

/**
 * Disallow negating the left operand of relational operators.
 *
 * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
 */
export interface NoUnsafeNegationRule {
  /**
   * Disallow negating the left operand of relational operators.
   *
   * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
   */
  'no-unsafe-negation': NoUnsafeNegationRuleConfig;
}
