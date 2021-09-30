import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
 */
export type NoDeprecatedDataObjectDeclarationRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
 */
export interface NoDeprecatedDataObjectDeclarationRule {
  /**
   * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
   */
  'vue/no-deprecated-data-object-declaration': NoDeprecatedDataObjectDeclarationRuleConfig;
}
