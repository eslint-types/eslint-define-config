import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent indentation in `<script>`
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export type ScriptIndentRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent indentation in `<script>`
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export interface ScriptIndentRule {
  /**
   * Enforce consistent indentation in `<script>`
   *
   * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
   */
  'vue/script-indent': ScriptIndentRuleConfig;
}
