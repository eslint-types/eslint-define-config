import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDeprecatedModelDefinitionOption {
  allowVue3Compat?: boolean;
}

/**
 * Options.
 */
export type NoDeprecatedModelDefinitionOptions = [
  NoDeprecatedModelDefinitionOption?,
];

/**
 * Disallow deprecated `model` definition (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-model-definition](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
 */
export type NoDeprecatedModelDefinitionRuleConfig =
  RuleConfig<NoDeprecatedModelDefinitionOptions>;

/**
 * Disallow deprecated `model` definition (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-model-definition](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
 */
export interface NoDeprecatedModelDefinitionRule {
  /**
   * Disallow deprecated `model` definition (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-model-definition](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
   */
  'vue/no-deprecated-model-definition': NoDeprecatedModelDefinitionRuleConfig;
}
