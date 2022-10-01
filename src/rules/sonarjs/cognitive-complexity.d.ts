import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type CognitiveComplexityConfig = 'sonar-runtime' | 'metric';

/**
 * Option.
 */
export type CognitiveComplexityOption = number;

/**
 * Options.
 */
export type CognitiveComplexityOptions = [
  CognitiveComplexityOption?,
  CognitiveComplexityConfig?,
];

/**
 * Cognitive Complexity of functions should not be too high.
 *
 * @see [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
 */
export type CognitiveComplexityRuleConfig =
  RuleConfig<CognitiveComplexityOptions>;

/**
 * Cognitive Complexity of functions should not be too high.
 *
 * @see [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
 */
export interface CognitiveComplexityRule {
  /**
   * Cognitive Complexity of functions should not be too high.
   *
   * @see [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
   */
  'sonarjs/cognitive-complexity': CognitiveComplexityRuleConfig;
}
