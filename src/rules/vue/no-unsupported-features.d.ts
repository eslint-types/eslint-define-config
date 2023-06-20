import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnsupportedFeaturesOption {
  version?: string;
  ignores?: (
    | 'slot-scope-attribute'
    | 'dynamic-directive-arguments'
    | 'v-slot'
    | 'script-setup'
    | 'style-css-vars-injection'
    | 'v-model-argument'
    | 'v-model-custom-modifiers'
    | 'v-is'
    | 'is-attribute-with-vue-prefix'
    | 'v-memo'
    | 'v-bind-prop-modifier-shorthand'
    | 'v-bind-attr-modifier'
    | 'define-options'
    | 'define-slots'
  )[];
}

/**
 * Options.
 */
export type NoUnsupportedFeaturesOptions = [NoUnsupportedFeaturesOption?];

/**
 * Disallow unsupported Vue.js syntax on the specified version.
 *
 * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
 */
export type NoUnsupportedFeaturesRuleConfig =
  RuleConfig<NoUnsupportedFeaturesOptions>;

/**
 * Disallow unsupported Vue.js syntax on the specified version.
 *
 * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
 */
export interface NoUnsupportedFeaturesRule {
  /**
   * Disallow unsupported Vue.js syntax on the specified version.
   *
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  'vue/no-unsupported-features': NoUnsupportedFeaturesRuleConfig;
}
