import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MustacheInterpolationSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type MustacheInterpolationSpacingOptions = [
  MustacheInterpolationSpacingOption?,
];

/**
 * Enforce unified spacing in mustache interpolations.
 *
 * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
 */
export type MustacheInterpolationSpacingRuleConfig =
  RuleConfig<MustacheInterpolationSpacingOptions>;

/**
 * Enforce unified spacing in mustache interpolations.
 *
 * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
 */
export interface MustacheInterpolationSpacingRule {
  /**
   * Enforce unified spacing in mustache interpolations.
   *
   * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
   */
  'vue/mustache-interpolation-spacing': MustacheInterpolationSpacingRuleConfig;
}
