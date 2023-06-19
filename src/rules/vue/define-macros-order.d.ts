import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DefineMacrosOrderOption {
  order?: ('defineEmits' | 'defineProps' | 'defineOptions' | 'defineSlots')[];
}

/**
 * Options.
 */
export type DefineMacrosOrderOptions = [DefineMacrosOrderOption?];

/**
 * Enforce order of `defineEmits` and `defineProps` compiler macros.
 *
 * @see [define-macros-order](https://eslint.vuejs.org/rules/define-macros-order.html)
 */
export type DefineMacrosOrderRuleConfig = RuleConfig<DefineMacrosOrderOptions>;

/**
 * Enforce order of `defineEmits` and `defineProps` compiler macros.
 *
 * @see [define-macros-order](https://eslint.vuejs.org/rules/define-macros-order.html)
 */
export interface DefineMacrosOrderRule {
  /**
   * Enforce order of `defineEmits` and `defineProps` compiler macros.
   *
   * @see [define-macros-order](https://eslint.vuejs.org/rules/define-macros-order.html)
   */
  'vue/define-macros-order': DefineMacrosOrderRuleConfig;
}
