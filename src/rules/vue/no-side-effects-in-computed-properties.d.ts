import type { RuleConfig } from '../rule-config';

/**
 * Disallow side effects in computed properties.
 *
 * @see [no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
 */
export type NoSideEffectsInComputedPropertiesRuleConfig = RuleConfig<[]>;

/**
 * Disallow side effects in computed properties.
 *
 * @see [no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
 */
export interface NoSideEffectsInComputedPropertiesRule {
  /**
   * Disallow side effects in computed properties.
   *
   * @see [no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
   */
  'vue/no-side-effects-in-computed-properties': NoSideEffectsInComputedPropertiesRuleConfig;
}
