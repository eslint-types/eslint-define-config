import type { RuleConfig } from '../rule-config';

/**
 * enforce unified spacing in mustache interpolations
 *
 * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
 */
export type MustacheInterpolationSpacingRuleConfig = RuleConfig<[]>;

/**
 * enforce unified spacing in mustache interpolations
 *
 * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
 */
export interface MustacheInterpolationSpacingRule {
  /**
   * enforce unified spacing in mustache interpolations
   *
   * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
   */
  'vue/mustache-interpolation-spacing': MustacheInterpolationSpacingRuleConfig;
}
