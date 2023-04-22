import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface ScriptIndentConfig {
  baseIndent?: number;
  switchCase?: number;
  ignores?: string[];
}

/**
 * Option.
 */
export type ScriptIndentOption = number | 'tab';

/**
 * Options.
 */
export type ScriptIndentOptions = [ScriptIndentOption?, ScriptIndentConfig?];

/**
 * Enforce consistent indentation in `<script>`.
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export type ScriptIndentRuleConfig = RuleConfig<ScriptIndentOptions>;

/**
 * Enforce consistent indentation in `<script>`.
 *
 * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
 */
export interface ScriptIndentRule {
  /**
   * Enforce consistent indentation in `<script>`.
   *
   * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
   */
  'vue/script-indent': ScriptIndentRuleConfig;
}
