import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireMacroVariableNameOption {
  defineProps?: string;
  defineEmits?: string;
  defineSlots?: string;
  useSlots?: string;
  useAttrs?: string;
}

/**
 * Options.
 */
export type RequireMacroVariableNameOptions = [RequireMacroVariableNameOption?];

/**
 * Require a certain macro variable name.
 *
 * @see [require-macro-variable-name](https://eslint.vuejs.org/rules/require-macro-variable-name.html)
 */
export type RequireMacroVariableNameRuleConfig =
  RuleConfig<RequireMacroVariableNameOptions>;

/**
 * Require a certain macro variable name.
 *
 * @see [require-macro-variable-name](https://eslint.vuejs.org/rules/require-macro-variable-name.html)
 */
export interface RequireMacroVariableNameRule {
  /**
   * Require a certain macro variable name.
   *
   * @see [require-macro-variable-name](https://eslint.vuejs.org/rules/require-macro-variable-name.html)
   */
  'vue/require-macro-variable-name': RequireMacroVariableNameRuleConfig;
}
