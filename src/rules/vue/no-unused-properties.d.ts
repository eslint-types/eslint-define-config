import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedPropertiesOption = {
  /**
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  groups?: any;

  /**
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  deepData?: any;

  /**
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  ignorePublicMembers?: any;
};

/**
 * Options.
 */
export type NoUnusedPropertiesOptions = [NoUnusedPropertiesOption?];

/**
 * disallow unused properties
 *
 * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
 */
export type NoUnusedPropertiesRuleConfig = RuleConfig<NoUnusedPropertiesOptions>;

/**
 * disallow unused properties
 *
 * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
 */
export interface NoUnusedPropertiesRule {
  /**
   * disallow unused properties
   *
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  'vue/no-unused-properties': NoUnusedPropertiesRuleConfig;
}
