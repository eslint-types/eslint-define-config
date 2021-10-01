import type { RuleConfig } from '../rule-config';

/**
 * Disallow mustaches in `<textarea>`.
 *
 * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
 */
export type NoTextareaMustacheRuleConfig = RuleConfig<[]>;

/**
 * Disallow mustaches in `<textarea>`.
 *
 * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
 */
export interface NoTextareaMustacheRule {
  /**
   * Disallow mustaches in `<textarea>`.
   *
   * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
   */
  'vue/no-textarea-mustache': NoTextareaMustacheRuleConfig;
}
