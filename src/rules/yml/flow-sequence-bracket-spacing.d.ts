import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface FlowSequenceBracketSpacingConfig {
  singleValue?: boolean;
  objectsInArrays?: boolean;
  arraysInArrays?: boolean;
}

/**
 * Option.
 */
export type FlowSequenceBracketSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type FlowSequenceBracketSpacingOptions = [
  FlowSequenceBracketSpacingOption?,
  FlowSequenceBracketSpacingConfig?,
];

/**
 * Enforce consistent spacing inside flow sequence brackets.
 *
 * @see [flow-sequence-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)
 */
export type FlowSequenceBracketSpacingRuleConfig =
  RuleConfig<FlowSequenceBracketSpacingOptions>;

/**
 * Enforce consistent spacing inside flow sequence brackets.
 *
 * @see [flow-sequence-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)
 */
export interface FlowSequenceBracketSpacingRule {
  /**
   * Enforce consistent spacing inside flow sequence brackets.
   *
   * @see [flow-sequence-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)
   */
  'yml/flow-sequence-bracket-spacing': FlowSequenceBracketSpacingRuleConfig;
}
