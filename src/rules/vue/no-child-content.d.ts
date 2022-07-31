import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoChildContentOption {
  /**
   * @minItems 1
   */
  additionalDirectives: [string, ...string[]];
}

/**
 * Options.
 */
export type NoChildContentOptions = [NoChildContentOption?];

/**
 * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
 *
 * @see [no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
 */
export type NoChildContentRuleConfig = RuleConfig<NoChildContentOptions>;

/**
 * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
 *
 * @see [no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
 */
export interface NoChildContentRule {
  /**
   * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
   *
   * @see [no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
   */
  'vue/no-child-content': NoChildContentRuleConfig;
}
