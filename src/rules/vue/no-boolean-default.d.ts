import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoBooleanDefaultOption = 'default-false' | 'no-default';

/**
 * Options.
 */
export type NoBooleanDefaultOptions = [NoBooleanDefaultOption?];

/**
 * Disallow boolean defaults.
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export type NoBooleanDefaultRuleConfig = RuleConfig<NoBooleanDefaultOptions>;

/**
 * Disallow boolean defaults.
 *
 * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
 */
export interface NoBooleanDefaultRule {
  /**
   * Disallow boolean defaults.
   *
   * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
   */
  'vue/no-boolean-default': NoBooleanDefaultRuleConfig;
}
