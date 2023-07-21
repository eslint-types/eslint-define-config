import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockSequenceOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

/**
 * Options.
 */
export type BlockSequenceOptions = [BlockSequenceOption?];

/**
 * Require or disallow block style sequences.
 *
 * @see [block-sequence](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)
 */
export type BlockSequenceRuleConfig = RuleConfig<BlockSequenceOptions>;

/**
 * Require or disallow block style sequences.
 *
 * @see [block-sequence](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)
 */
export interface BlockSequenceRule {
  /**
   * Require or disallow block style sequences.
   *
   * @see [block-sequence](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)
   */
  'yml/block-sequence': BlockSequenceRuleConfig;
}
