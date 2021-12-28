import type { RuleConfig } from '../rule-config';

/**
 * Require static class names in template to be in a separate `class` attribute.
 *
 * @see [prefer-separate-static-class](https://eslint.vuejs.org/rules/prefer-separate-static-class.html)
 */
export type PreferSeparateStaticClassRuleConfig = RuleConfig<[]>;

/**
 * Require static class names in template to be in a separate `class` attribute.
 *
 * @see [prefer-separate-static-class](https://eslint.vuejs.org/rules/prefer-separate-static-class.html)
 */
export interface PreferSeparateStaticClassRule {
  /**
   * Require static class names in template to be in a separate `class` attribute.
   *
   * @see [prefer-separate-static-class](https://eslint.vuejs.org/rules/prefer-separate-static-class.html)
   */
  'vue/prefer-separate-static-class': PreferSeparateStaticClassRuleConfig;
}
