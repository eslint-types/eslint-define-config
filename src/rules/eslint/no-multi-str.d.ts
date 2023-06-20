import type { RuleConfig } from '../rule-config';

/**
 * Disallow multiline strings.
 *
 * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
 */
export type NoMultiStrRuleConfig = RuleConfig<[]>;

/**
 * Disallow multiline strings.
 *
 * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
 */
export interface NoMultiStrRule {
  /**
   * Disallow multiline strings.
   *
   * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
   */
  'no-multi-str': NoMultiStrRuleConfig;
}
