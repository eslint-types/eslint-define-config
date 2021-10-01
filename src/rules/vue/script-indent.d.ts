import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type ScriptIndentConfig = {
  baseIndent?: number;
  switchCase?: number;
  ignores?: any[];
};

/**
 * Option.
 */
export type ScriptIndentOption = any;

/**
 * Options.
 */
export type ScriptIndentOptions = [ScriptIndentOption?, ScriptIndentConfig?];

/**
 * Enforce consistent indentation in `<script>`
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export type ScriptIndentRuleConfig = RuleConfig<ScriptIndentOptions>;

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
