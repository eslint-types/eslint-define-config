import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface BlockOrderOption {
  order?: (string | string[])[];
}

/**
 * Options.
 */
export type BlockOrderOptions = [BlockOrderOption?];

/**
 * Enforce order of component top-level elements.
 *
 * @see [block-order](https://eslint.vuejs.org/rules/block-order.html)
 */
export type BlockOrderRuleConfig = RuleConfig<BlockOrderOptions>;

/**
 * Enforce order of component top-level elements.
 *
 * @see [block-order](https://eslint.vuejs.org/rules/block-order.html)
 */
export interface BlockOrderRule {
  /**
   * Enforce order of component top-level elements.
   *
   * @see [block-order](https://eslint.vuejs.org/rules/block-order.html)
   */
  'vue/block-order': BlockOrderRuleConfig;
}
