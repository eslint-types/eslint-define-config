import type { IndentOptions } from '../eslint/indent';
import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)
 */
export type IndentRuleConfig = RuleConfig<IndentOptions>;

/**
 * Enforce consistent indentation.
 *
 * @see [indent](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)
 */
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md)
   */
  '@typescript-eslint/indent': IndentRuleConfig;
}
