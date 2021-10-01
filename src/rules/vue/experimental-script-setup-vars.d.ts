import type { RuleConfig } from '../rule-config';

/**
 * Prevent variables defined in `<script setup>` to be marked as undefined.
 *
 * @deprecated
 *
 * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
 */
export type ExperimentalScriptSetupVarsRuleConfig = RuleConfig<[]>;

/**
 * Prevent variables defined in `<script setup>` to be marked as undefined.
 *
 * @deprecated
 *
 * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
 */
export interface ExperimentalScriptSetupVarsRule {
  /**
   * Prevent variables defined in `<script setup>` to be marked as undefined.
   *
   * @deprecated
   *
   * @see [experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)
   */
  'vue/experimental-script-setup-vars': ExperimentalScriptSetupVarsRuleConfig;
}
