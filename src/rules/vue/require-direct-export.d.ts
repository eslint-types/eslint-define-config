import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireDirectExportOption = {
  /**
   * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
   */
  disallowFunctionalComponentFunction?: any;
};

/**
 * Options.
 */
export type RequireDirectExportOptions = [RequireDirectExportOption?];

/**
 * Require the component to be directly exported
 *
 * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
 */
export type RequireDirectExportRuleConfig = RuleConfig<RequireDirectExportOptions>;

/**
 * Require the component to be directly exported
 *
 * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
 */
export interface RequireDirectExportRule {
  /**
   * Require the component to be directly exported
   *
   * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
   */
  'vue/require-direct-export': RequireDirectExportRuleConfig;
}
