import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FlowMappingCurlyNewlineOption =
  | ('always' | 'never')
  | {
      multiline?: boolean;
      minProperties?: number;
      consistent?: boolean;
    };

/**
 * Options.
 */
export type FlowMappingCurlyNewlineOptions = [FlowMappingCurlyNewlineOption?];

/**
 * Enforce consistent line breaks inside braces.
 *
 * @see [flow-mapping-curly-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)
 */
export type FlowMappingCurlyNewlineRuleConfig =
  RuleConfig<FlowMappingCurlyNewlineOptions>;

/**
 * Enforce consistent line breaks inside braces.
 *
 * @see [flow-mapping-curly-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)
 */
export interface FlowMappingCurlyNewlineRule {
  /**
   * Enforce consistent line breaks inside braces.
   *
   * @see [flow-mapping-curly-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)
   */
  'yml/flow-mapping-curly-newline': FlowMappingCurlyNewlineRuleConfig;
}
