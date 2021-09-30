import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDuplicateAttributesOption = {
  /**
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  allowCoexistClass?: any;

  /**
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  allowCoexistStyle?: any;
};

/**
 * Options.
 */
export type NoDuplicateAttributesOptions = [NoDuplicateAttributesOption?];

/**
 * Disallow duplication of attributes
 *
 * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
 */
export type NoDuplicateAttributesRuleConfig = RuleConfig<NoDuplicateAttributesOptions>;

/**
 * Disallow duplication of attributes
 *
 * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
 */
export interface NoDuplicateAttributesRule {
  /**
   * Disallow duplication of attributes
   *
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  'vue/no-duplicate-attributes': NoDuplicateAttributesRuleConfig;
}
