import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type CamelcaseOption = {
  /**
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  ignoreDestructuring?: any;

  /**
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  ignoreImports?: any;

  /**
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  ignoreGlobals?: any;

  /**
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  properties?: any;

  /**
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  allow?: any;
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
