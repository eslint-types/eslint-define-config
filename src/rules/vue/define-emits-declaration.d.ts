import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DefineEmitsDeclarationOption = 'type-based' | 'runtime';

/**
 * Options.
 */
export type DefineEmitsDeclarationOptions = [DefineEmitsDeclarationOption?];

/**
 * Enforce declaration style of `defineEmits`.
 *
 * @see [define-emits-declaration](https://eslint.vuejs.org/rules/define-emits-declaration.html)
 */
export type DefineEmitsDeclarationRuleConfig =
  RuleConfig<DefineEmitsDeclarationOptions>;

/**
 * Enforce declaration style of `defineEmits`.
 *
 * @see [define-emits-declaration](https://eslint.vuejs.org/rules/define-emits-declaration.html)
 */
export interface DefineEmitsDeclarationRule {
  /**
   * Enforce declaration style of `defineEmits`.
   *
   * @see [define-emits-declaration](https://eslint.vuejs.org/rules/define-emits-declaration.html)
   */
  'vue/define-emits-declaration': DefineEmitsDeclarationRuleConfig;
}
