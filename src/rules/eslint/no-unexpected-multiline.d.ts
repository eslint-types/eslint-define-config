import type { RuleConfig } from '../rule-config';

/**
 * Disallow confusing multiline expressions.
 *
 * @see [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
 */
export type NoUnexpectedMultilineRuleConfig = RuleConfig<[]>;

/**
 * Disallow confusing multiline expressions.
 *
 * @see [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
 */
export interface NoUnexpectedMultilineRule {
  /**
   * Disallow confusing multiline expressions.
   *
   * @see [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)
   */
  'no-unexpected-multiline': NoUnexpectedMultilineRuleConfig;
}
