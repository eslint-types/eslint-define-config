import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoStaticInlineStylesOption = {
  /**
   * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
   */
  allowBinding?: any;
};

/**
 * Options.
 */
export type NoStaticInlineStylesOptions = [NoStaticInlineStylesOption?];

/**
 * disallow static inline `style` attributes
 *
 * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
 */
export type NoStaticInlineStylesRuleConfig = RuleConfig<NoStaticInlineStylesOptions>;

/**
 * disallow static inline `style` attributes
 *
 * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
 */
export interface NoStaticInlineStylesRule {
  /**
   * disallow static inline `style` attributes
   *
   * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
   */
  'vue/no-static-inline-styles': NoStaticInlineStylesRuleConfig;
}
