import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CamelcaseOption = {
  ignoreDestructuring?: boolean;
  ignoreImports?: boolean;
  ignoreGlobals?: boolean;
  properties?: any;
  allow?: any[];
};

/**
 * Options.
 */
export type CamelcaseOptions = [CamelcaseOption?];

/**
 * Enforce camelcase naming convention
 *
 * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
 */
export type CamelcaseRuleConfig = RuleConfig<CamelcaseOptions>;

/**
 * Enforce camelcase naming convention
 *
 * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
 */
export interface CamelcaseRule {
  /**
   * Enforce camelcase naming convention
   *
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  'vue/camelcase': CamelcaseRuleConfig;
}
