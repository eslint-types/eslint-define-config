import type { RuleConfig } from '../rule-config';

/**
 *
 * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
 */
export type NoNestingRuleConfig = RuleConfig<[]>;

/**
 *
 * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
 */
export interface NoNestingRule {
  /**
   *
   * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
   */
  'promise/no-nesting': NoNestingRuleConfig;
}
