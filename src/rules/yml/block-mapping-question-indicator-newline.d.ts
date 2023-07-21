import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockMappingQuestionIndicatorNewlineOption = 'always' | 'never';

/**
 * Options.
 */
export type BlockMappingQuestionIndicatorNewlineOptions = [
  BlockMappingQuestionIndicatorNewlineOption?,
];

/**
 * Enforce consistent line breaks after `?` indicator.
 *
 * @see [block-mapping-question-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)
 */
export type BlockMappingQuestionIndicatorNewlineRuleConfig =
  RuleConfig<BlockMappingQuestionIndicatorNewlineOptions>;

/**
 * Enforce consistent line breaks after `?` indicator.
 *
 * @see [block-mapping-question-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)
 */
export interface BlockMappingQuestionIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `?` indicator.
   *
   * @see [block-mapping-question-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)
   */
  'yml/block-mapping-question-indicator-newline': BlockMappingQuestionIndicatorNewlineRuleConfig;
}
