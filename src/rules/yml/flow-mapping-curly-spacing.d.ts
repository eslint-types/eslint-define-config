import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface FlowMappingCurlySpacingConfig {
  arraysInObjects?: boolean;
  objectsInObjects?: boolean;
}

/**
 * Option.
 */
export type FlowMappingCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type FlowMappingCurlySpacingOptions = [
  FlowMappingCurlySpacingOption?,
  FlowMappingCurlySpacingConfig?,
];

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [flow-mapping-curly-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)
 */
export type FlowMappingCurlySpacingRuleConfig =
  RuleConfig<FlowMappingCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces.
 *
 * @see [flow-mapping-curly-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)
 */
export interface FlowMappingCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces.
   *
   * @see [flow-mapping-curly-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)
   */
  'yml/flow-mapping-curly-spacing': FlowMappingCurlySpacingRuleConfig;
}
