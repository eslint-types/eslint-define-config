import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoEmptyPatternOption {
  allowObjectPatternsAsParameters?: boolean;
}

/**
 * Options.
 */
export type NoEmptyPatternOptions = [NoEmptyPatternOption?];

/**
 * Disallow empty destructuring patterns.
 *
 * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
 */
export type NoEmptyPatternRuleConfig = RuleConfig<NoEmptyPatternOptions>;

/**
 * Disallow empty destructuring patterns.
 *
 * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
 */
export interface NoEmptyPatternRule {
  /**
   * Disallow empty destructuring patterns.
   *
   * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
   */
  'no-empty-pattern': NoEmptyPatternRuleConfig;
}
