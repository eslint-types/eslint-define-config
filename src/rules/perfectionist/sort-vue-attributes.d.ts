import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortVueAttributesOption {
  'custom-groups'?: {
    [k: string]: any;
  };
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'ignore-case'?: boolean;
  groups?: any[];
}

/**
 * Options.
 */
export type SortVueAttributesOptions = [SortVueAttributesOption?];

/**
 * Enforce sorted Vue attributes.
 *
 * @see [sort-vue-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes)
 */
export type SortVueAttributesRuleConfig = RuleConfig<SortVueAttributesOptions>;

/**
 * Enforce sorted Vue attributes.
 *
 * @see [sort-vue-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes)
 */
export interface SortVueAttributesRule {
  /**
   * Enforce sorted Vue attributes.
   *
   * @see [sort-vue-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-vue-attributes)
   */
  'perfectionist/sort-vue-attributes': SortVueAttributesRuleConfig;
}
