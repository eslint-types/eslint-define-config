import type { RuleConfig } from '../rule-config';

/**
 * disallow `export` in `<script setup>`
 *
 * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
 */
export type NoExportInScriptSetupRuleConfig = RuleConfig<[]>;

/**
 * disallow `export` in `<script setup>`
 *
 * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
 */
export interface NoExportInScriptSetupRule {
  /**
   * disallow `export` in `<script setup>`
   *
   * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
   */
  'vue/no-export-in-script-setup': NoExportInScriptSetupRuleConfig;
}
