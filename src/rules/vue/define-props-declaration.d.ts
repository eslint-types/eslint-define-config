import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type DefinePropsDeclarationOption = 'type-based' | 'runtime';

/**
 * Options.
 */
export type DefinePropsDeclarationOptions = [DefinePropsDeclarationOption?];

/**
 * Enforce declaration style of `defineProps`.
 *
 * @see [define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)
 */
export type DefinePropsDeclarationRuleConfig =
  RuleConfig<DefinePropsDeclarationOptions>;

/**
 * Enforce declaration style of `defineProps`.
 *
 * @see [define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)
 */
export interface DefinePropsDeclarationRule {
  /**
   * Enforce declaration style of `defineProps`.
   *
   * @see [define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)
   */
  'vue/define-props-declaration': DefinePropsDeclarationRuleConfig;
}
