import type { RuleConfig } from '../rule-config';

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
 */
export type NoTemplateShadowRuleConfig = RuleConfig<[]>;

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope.
 *
 * @see [no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
 */
export interface NoTemplateShadowRule {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
   */
  'vue/no-template-shadow': NoTemplateShadowRuleConfig;
}
