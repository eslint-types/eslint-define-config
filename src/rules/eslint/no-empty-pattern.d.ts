import type { RuleConfig } from '../rule-config';

/**
 * Disallow empty destructuring patterns.
 *
 * @see [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
 */
export type NoEmptyPatternRuleConfig = RuleConfig<[]>;

/**
 * Disallow empty destructuring patterns.
 *
 * @see [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
 */
export interface NoEmptyPatternRule {
  /**
   * Disallow empty destructuring patterns.
   *
   * @see [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)
   */
  'no-empty-pattern': NoEmptyPatternRuleConfig;
}
