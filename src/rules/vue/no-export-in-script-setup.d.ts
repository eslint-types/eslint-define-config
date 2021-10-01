import type { RuleConfig } from '../rule-config';

/**
 * Disallow `export` in `<script setup>`.
 *
 * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
 */
export type NoExportInScriptSetupRuleConfig = RuleConfig<[]>;

/**
 * Disallow `export` in `<script setup>`.
 *
 * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
 */
export interface NoExportInScriptSetupRule {
  /**
   * Disallow `export` in `<script setup>`.
   *
   * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
   */
  'vue/no-export-in-script-setup': NoExportInScriptSetupRuleConfig;
}
