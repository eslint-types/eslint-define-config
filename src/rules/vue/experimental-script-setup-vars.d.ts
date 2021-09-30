import type { RuleConfig } from '../rule-config';

/**
 * prevent variables defined in `<script setup>` to be marked as undefined
 *
 * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
 */
export type ExperimentalScriptSetupVarsRuleConfig = RuleConfig<[]>;

/**
 * prevent variables defined in `<script setup>` to be marked as undefined
 *
 * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
 */
export interface ExperimentalScriptSetupVarsRule {
  /**
   * prevent variables defined in `<script setup>` to be marked as undefined
   *
   * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
   */
  'vue/experimental-script-setup-vars': ExperimentalScriptSetupVarsRuleConfig;
}
