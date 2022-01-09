import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicateAttributesOption {
  allowCoexistClass?: boolean;
  allowCoexistStyle?: boolean;
}

/**
 * Options.
 */
export type NoDuplicateAttributesOptions = [NoDuplicateAttributesOption?];

/**
 * Disallow duplication of attributes.
 *
 * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
 */
export type NoDuplicateAttributesRuleConfig =
  RuleConfig<NoDuplicateAttributesOptions>;

/**
 * Disallow duplication of attributes.
 *
 * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
 */
export interface NoDuplicateAttributesRule {
  /**
   * Disallow duplication of attributes.
   *
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  'vue/no-duplicate-attributes': NoDuplicateAttributesRuleConfig;
}
