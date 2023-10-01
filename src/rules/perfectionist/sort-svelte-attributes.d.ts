import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortSvelteAttributesOption {
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
export type SortSvelteAttributesOptions = [SortSvelteAttributesOption?];

/**
 * Enforce sorted Svelte attributes.
 *
 * @see [sort-svelte-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes)
 */
export type SortSvelteAttributesRuleConfig =
  RuleConfig<SortSvelteAttributesOptions>;

/**
 * Enforce sorted Svelte attributes.
 *
 * @see [sort-svelte-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes)
 */
export interface SortSvelteAttributesRule {
  /**
   * Enforce sorted Svelte attributes.
   *
   * @see [sort-svelte-attributes](https://eslint-plugin-perfectionist.azat.io/rules/sort-svelte-attributes)
   */
  'perfectionist/sort-svelte-attributes': SortSvelteAttributesRuleConfig;
}
