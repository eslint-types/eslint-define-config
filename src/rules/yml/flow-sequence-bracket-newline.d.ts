import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FlowSequenceBracketNewlineOption =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Options.
 */
export type FlowSequenceBracketNewlineOptions = [
  FlowSequenceBracketNewlineOption?,
];

/**
 * Enforce linebreaks after opening and before closing flow sequence brackets.
 *
 * @see [flow-sequence-bracket-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)
 */
export type FlowSequenceBracketNewlineRuleConfig =
  RuleConfig<FlowSequenceBracketNewlineOptions>;

/**
 * Enforce linebreaks after opening and before closing flow sequence brackets.
 *
 * @see [flow-sequence-bracket-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)
 */
export interface FlowSequenceBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing flow sequence brackets.
   *
   * @see [flow-sequence-bracket-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)
   */
  'yml/flow-sequence-bracket-newline': FlowSequenceBracketNewlineRuleConfig;
}
