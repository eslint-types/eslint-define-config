import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent indentation in `<script>`
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export type ScriptIndentRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent indentation in `<script>`
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export interface ScriptIndentRule {
  /**
   * enforce consistent indentation in `<script>`
   *
   * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
   */
  'vue/script-indent': ScriptIndentRuleConfig;
}
