import type { RuleConfig } from '../rule-config';

/**
 * Enforce `Boolean` comes first in component prop types.
 *
 * @see [prefer-prop-type-boolean-first](https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html)
 */
export type PreferPropTypeBooleanFirstRuleConfig = RuleConfig<[]>;

/**
 * Enforce `Boolean` comes first in component prop types.
 *
 * @see [prefer-prop-type-boolean-first](https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html)
 */
export interface PreferPropTypeBooleanFirstRule {
  /**
   * Enforce `Boolean` comes first in component prop types.
   *
   * @see [prefer-prop-type-boolean-first](https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html)
   */
  'vue/prefer-prop-type-boolean-first': PreferPropTypeBooleanFirstRuleConfig;
}
