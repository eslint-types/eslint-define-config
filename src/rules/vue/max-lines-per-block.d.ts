import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxLinesPerBlockOption {
  style?: number;
  template?: number;
  script?: number;
  skipBlankLines?: boolean;
}

/**
 * Options.
 */
export type MaxLinesPerBlockOptions = [MaxLinesPerBlockOption?];

/**
 * Enforce maximum number of lines in Vue SFC blocks.
 *
 * @see [max-lines-per-block](https://eslint.vuejs.org/rules/max-lines-per-block.html)
 */
export type MaxLinesPerBlockRuleConfig = RuleConfig<MaxLinesPerBlockOptions>;

/**
 * Enforce maximum number of lines in Vue SFC blocks.
 *
 * @see [max-lines-per-block](https://eslint.vuejs.org/rules/max-lines-per-block.html)
 */
export interface MaxLinesPerBlockRule {
  /**
   * Enforce maximum number of lines in Vue SFC blocks.
   *
   * @see [max-lines-per-block](https://eslint.vuejs.org/rules/max-lines-per-block.html)
   */
  'vue/max-lines-per-block': MaxLinesPerBlockRuleConfig;
}
