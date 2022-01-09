import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoStaticInlineStylesOption {
  allowBinding?: boolean;
}

/**
 * Options.
 */
export type NoStaticInlineStylesOptions = [NoStaticInlineStylesOption?];

/**
 * Disallow static inline `style` attributes.
 *
 * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
 */
export type NoStaticInlineStylesRuleConfig =
  RuleConfig<NoStaticInlineStylesOptions>;

/**
 * Disallow static inline `style` attributes.
 *
 * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
 */
export interface NoStaticInlineStylesRule {
  /**
   * Disallow static inline `style` attributes.
   *
   * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
   */
  'vue/no-static-inline-styles': NoStaticInlineStylesRuleConfig;
}
