import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedPropertiesOption = {
  groups?: any[];
  deepData?: boolean;
  ignorePublicMembers?: boolean;
};

/**
 * Options.
 */
export type NoUnusedPropertiesOptions = [NoUnusedPropertiesOption?];

/**
 * Disallow unused properties
 *
 * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
 */
export type NoUnusedPropertiesRuleConfig = RuleConfig<NoUnusedPropertiesOptions>;

/**
 * Disallow unused properties
 *
 * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
 */
export interface NoUnusedPropertiesRule {
  /**
   * Disallow unused properties
   *
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  'vue/no-unused-properties': NoUnusedPropertiesRuleConfig;
}
