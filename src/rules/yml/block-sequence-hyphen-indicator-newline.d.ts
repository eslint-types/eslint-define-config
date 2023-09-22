import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface BlockSequenceHyphenIndicatorNewlineConfig {
  nestedHyphen?: 'always' | 'never';
  blockMapping?: 'always' | 'never';
}

/**
 * Option.
 */
export type BlockSequenceHyphenIndicatorNewlineOption = 'always' | 'never';

/**
 * Options.
 */
export type BlockSequenceHyphenIndicatorNewlineOptions = [
  BlockSequenceHyphenIndicatorNewlineOption?,
  BlockSequenceHyphenIndicatorNewlineConfig?,
];

/**
 * Enforce consistent line breaks after `-` indicator.
 *
 * @see [block-sequence-hyphen-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)
 */
export type BlockSequenceHyphenIndicatorNewlineRuleConfig =
  RuleConfig<BlockSequenceHyphenIndicatorNewlineOptions>;

/**
 * Enforce consistent line breaks after `-` indicator.
 *
 * @see [block-sequence-hyphen-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)
 */
export interface BlockSequenceHyphenIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `-` indicator.
   *
   * @see [block-sequence-hyphen-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)
   */
  'yml/block-sequence-hyphen-indicator-newline': BlockSequenceHyphenIndicatorNewlineRuleConfig;
}
