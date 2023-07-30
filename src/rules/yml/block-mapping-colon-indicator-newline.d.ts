import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockMappingColonIndicatorNewlineOption = 'always' | 'never';

/**
 * Options.
 */
export type BlockMappingColonIndicatorNewlineOptions = [
  BlockMappingColonIndicatorNewlineOption?,
];

/**
 * Enforce consistent line breaks after `:` indicator.
 *
 * @see [block-mapping-colon-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)
 */
export type BlockMappingColonIndicatorNewlineRuleConfig =
  RuleConfig<BlockMappingColonIndicatorNewlineOptions>;

/**
 * Enforce consistent line breaks after `:` indicator.
 *
 * @see [block-mapping-colon-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)
 */
export interface BlockMappingColonIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `:` indicator.
   *
   * @see [block-mapping-colon-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)
   */
  'yml/block-mapping-colon-indicator-newline': BlockMappingColonIndicatorNewlineRuleConfig;
}
