import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type BlockMappingOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

/**
 * Options.
 */
export type BlockMappingOptions = [BlockMappingOption?];

/**
 * Require or disallow block style mappings.
 *
 * @see [block-mapping](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)
 */
export type BlockMappingRuleConfig = RuleConfig<BlockMappingOptions>;

/**
 * Require or disallow block style mappings.
 *
 * @see [block-mapping](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)
 */
export interface BlockMappingRule {
  /**
   * Require or disallow block style mappings.
   *
   * @see [block-mapping](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)
   */
  'yml/block-mapping': BlockMappingRuleConfig;
}
