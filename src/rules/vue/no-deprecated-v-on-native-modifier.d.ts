import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html)
 */
export type NoDeprecatedVOnNativeModifierRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html)
 */
export interface NoDeprecatedVOnNativeModifierRule {
  /**
   * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html)
   */
  'vue/no-deprecated-v-on-native-modifier': NoDeprecatedVOnNativeModifierRuleConfig;
}
