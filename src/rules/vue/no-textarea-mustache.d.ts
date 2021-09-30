import type { RuleConfig } from '../rule-config';

/**
 * disallow mustaches in `<textarea>`
 *
 * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
 */
export type NoTextareaMustacheRuleConfig = RuleConfig<[]>;

/**
 * disallow mustaches in `<textarea>`
 *
 * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
 */
export interface NoTextareaMustacheRule {
  /**
   * disallow mustaches in `<textarea>`
   *
   * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
   */
  'vue/no-textarea-mustache': NoTextareaMustacheRuleConfig;
}
